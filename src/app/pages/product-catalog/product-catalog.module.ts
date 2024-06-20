import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogComponent } from './product-catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogToolbarComponent } from './product-catalog-toolbar/product-catalog-toolbar.component';
import { CategoriesModule } from 'src/app/modules/Categories/Categories.module';
import { ProductModule } from 'src/app/modules/Product/Product.module';
import { PaginatorModule } from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from 'src/app/modules/Product/pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductCatalogComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductModule,
    CategoriesModule,
    PaginatorModule,
    NgxPaginationModule,
  ],
  declarations: [ProductCatalogComponent, ProductCatalogToolbarComponent],
})
export class ProductCatalogModule {}
