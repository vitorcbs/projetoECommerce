import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../components/cart/model/cartItem.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {}

  id!: string;
  product: Product | undefined;
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
  ngOnInit() {
    this.getRouteId();
    this.productService.getProductById(this.id).subscribe((res) => {
      this.product = res;
    });
  }

  goBack(): void {
    this.router.navigate(['/product-catalog']);
  }

  getRouteId() {
    this.id = this.route.snapshot.params['id'];
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src =
      'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  }

  imageProductLength() {
    return this.product?.images ? this.product.images.length > 1 : false;
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
