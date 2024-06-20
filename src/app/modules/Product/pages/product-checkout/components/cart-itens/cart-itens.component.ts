import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/modules/Product/components/cart/model/cartItem.interface';

@Component({
  selector: 'app-cart-itens',
  templateUrl: './cart-itens.component.html',
  styleUrls: ['./cart-itens.component.scss']
})
export class CartItensComponent{

  @Input() cartItens: CartItem[]
  constructor() { }

  getTotal(): number {
    return this.cartItens.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src =
      'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'; // Substitua pelo caminho da sua imagem padrão
  }
}
