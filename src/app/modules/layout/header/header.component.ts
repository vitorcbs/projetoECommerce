import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, BadgeModule]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
