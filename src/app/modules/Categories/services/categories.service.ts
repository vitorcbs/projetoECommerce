import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { environment } from 'src/environments/environments';

@Injectable()
export class CategoriesService {
  constructor(private readonly http: HttpClient) {}
  apiURL = `${environment.apiUrl}${'categories'}`;

  getAllCategories(){
    return this.http.get(`${this.apiURL}`)
  }
  getCategoryById(categoryId: number){
    return this.http.get(`${this.apiURL}/${categoryId}`)
  }

  createCategory(category: Category){
    return this.http.post(`${this.apiURL}/`, category)
  }

  updateCategory(categoryId: number, category: Category){
    return this.http.put(`${this.apiURL}/${categoryId}`, category)
  }

  deleteCategory(croductId: number){
    return this.http.delete(`${this.apiURL}/${croductId}`)
  }

  returnProductsFromCategory(categoryId: number){
    return this.http.get(`${this.apiURL}/${categoryId}/products`)
  }
}
