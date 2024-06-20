import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartItem } from 'src/app/modules/Product/components/cart/model/cartItem.interface'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  imageProductLength() {
    return this.product?.images ? this.product.images.length > 1 : false;
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 3,
    },
  ];

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src =
      'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  }

  addToCart(product: Product): void {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      const newItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.images[0],
      };
      cart.push(newItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
