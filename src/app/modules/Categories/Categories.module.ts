import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './Categories.component';
import { CategoriesService } from './services/categories.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoriesComponent],
  providers: [CategoriesService]
})
export class CategoriesModule { }
