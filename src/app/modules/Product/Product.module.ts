import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './Product.component';
import { ProductService } from './services/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { GalleriaModule } from 'primeng/galleria';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    GalleriaModule,
    CardModule,
    ButtonModule
  ],
  declarations: [ProductComponent, ProductCardComponent, ProductCardListComponent],
  providers: [ProductService],
  exports: [ProductCardComponent, ProductCardListComponent]
})
export class ProductModule { }
