import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environments';

@Injectable()
export class ProductService {
  constructor(private readonly http: HttpClient) {}
  apiURL = `${environment.apiUrl}${'products'}`

  getAllProducts(){
    return this.http.get(`${this.apiURL}`)
  }
  getProductById(productId: number){
    return this.http.get(`${this.apiURL}/${productId}`)
  }

  createProduct(product: Product){
    return this.http.post(`${this.apiURL}/`, product)
  }

  updateProduct(productId: number, product: Product){
    return this.http.put(`${this.apiURL}/${productId}`, product)
  }

  deleteProduct(productId: number){
    return this.http.delete(`${this.apiURL}/${productId}`)
  }

  listPaginatorProducts(initialValue:number, limitResponse: number): Observable<Product[] | any>{
    return this.http.get(`${this.apiURL}?offset=${initialValue}&limit=${limitResponse}`)
  }
}
