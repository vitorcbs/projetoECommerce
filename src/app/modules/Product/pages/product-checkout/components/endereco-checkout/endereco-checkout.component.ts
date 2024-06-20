import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-endereco-checkout',
  templateUrl: './endereco-checkout.component.html',
  styleUrls: ['./endereco-checkout.component.scss'],
})
export class EnderecoCheckoutComponent {
  @Output() addressSubmit = new EventEmitter<any>();

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.addressForm.valid)
      this.addressSubmit.emit(this.addressForm.value);
  }
}
