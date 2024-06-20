import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environments';
import { CartItem } from '../components/cart/model/cartItem.interface';

@Injectable()
export class ProductService {
  apiURL = `${environment.apiUrl}${'products'}`
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  constructor(private http: HttpClient) {
  }

  updateCartItems(cartItems: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.cartItemsSubject.next(cartItems);
  }

  getAllProducts(): Observable<Product[] | any>{
    return this.http.get(`${this.apiURL}`)
  }
  getProductById(productId: string): Observable<Product | any>{
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

  listPaginatorProductsByCategory(initialValue: number, limitResponse: number, categoryId: number): Observable<Product[] | any>{
    return this.http.get(`${this.apiURL}?categoryId=${categoryId}&offset=${initialValue}&limit=${limitResponse}`)
  }
}
