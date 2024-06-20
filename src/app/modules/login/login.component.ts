import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthenticatorService } from './services/authenticator.service';
import * as bcrypt from 'bcryptjs';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegistering = false;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticatorService,
    private headerComponent: HeaderComponent
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm?.valid) {
      const user: User = this.loginForm.value;
      this.authService
        .login(user.email, user.password)
        .subscribe((response) => {
          if (response.length > 0) {
            const userToSave = {
              email: response[0].email,
              password: this.hashPassword(response[0].password),
            };
            localStorage.setItem('loggedInUser', JSON.stringify(userToSave));
            this.headerComponent.closeDialog();
          } else {
            this.errorMessage = 'Usuário não encontrado / Senha incorreta';
          }
        });
    }
  }

  toggleRegister(){
    this.isRegistering = !this.isRegistering
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      this.authService.createUser(user.email, user.password).subscribe(() => {
        const userToSave = {
          email: user.email,
          password: this.hashPassword(user.password),
        };
        localStorage.setItem('loggedInUser', JSON.stringify(userToSave));
        this.headerComponent.closeDialog();
      });
    }
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
}
