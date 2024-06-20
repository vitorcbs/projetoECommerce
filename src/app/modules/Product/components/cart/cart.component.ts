import { Component, OnInit } from '@angular/core';
import { CartItem } from './model/cartItem.interface';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  private cartSubscription: Subscription;

  constructor(private readonly cartService: ProductService) { }

  ngOnInit() {
    this.loadCartItems();
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  private loadCartItems() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartItems = JSON.parse(cart);
    } else {
      this.cartItems = []; // Define como vazio se não houver itens no localStorage
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.updateCart();
  }

  removeFromCart(item: CartItem) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCart();
    }
  }

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));// Se necessário atualizar no serviço
  }

  updateCartItems() {
    this.loadCartItems();
  }
}
