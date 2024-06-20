import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductModule } from 'src/app/modules/Product/Product.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesModule } from 'src/app/modules/Categories/Categories.module';

const routes: Routes = [
  { path: '', component: HomeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    CategoriesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
