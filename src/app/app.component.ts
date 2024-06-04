import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HeaderComponent } from './modules/layout/header/header.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HttpClientModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getTeste()
  }

  constructor(private readonly http: HttpClient){

  }
  title = 'projetoNX';


  getTeste(){
    this.http.get('https://api.escuelajs.co/api/v1/products').subscribe((res) => 
    {
      console.log(res)
    })
  }
}
