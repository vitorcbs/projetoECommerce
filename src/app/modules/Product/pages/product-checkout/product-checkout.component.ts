import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../components/cart/model/cartItem.interface';
import { Endereco } from 'src/app/models/Endereco';
import { Pagamento } from 'src/app/models/Pagamento';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  addressData: Endereco | any;
  paymentData: Pagamento | any;
  currentStep = 0;

  ngOnInit(): void {
    this.loadCartItems();
  }

  onAddressSubmit(addressData: Event) {
    this.addressData = addressData
    console.log(addressData)
    this.nextStep()
  }

  onPaymentSubmit(paymentData: Event) {
    this.paymentData = paymentData
    console.log(paymentData)
    this.nextStep()
  }

  returnStep(){
    if(this.currentStep > 0)
      this.currentStep--
  }

  nextStep(){
    this.currentStep++
  }

  loadCartItems() {
    const cartItemsJson = localStorage.getItem('cart');
    if (cartItemsJson) {
      this.cartItems = JSON.parse(cartItemsJson);
    }
  }
}
