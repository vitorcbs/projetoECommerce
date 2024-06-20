import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FinalizacaoCheckoutComponent } from '../finalizacao-checkout/finalizacao-checkout.component';
import { CartItem } from 'src/app/modules/Product/components/cart/model/cartItem.interface';
import { Endereco } from 'src/app/models/Endereco';
import { Pagamento } from 'src/app/models/Pagamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revisao-checkout',
  templateUrl: './revisao-checkout.component.html',
  styleUrls: ['./revisao-checkout.component.scss']
})
export class RevisaoCheckoutComponent implements OnInit {
  @Input() endereco: Endereco;
  @Input() cartItems: CartItem[]; 
  @Input() payment: Pagamento;

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService, private router: Router) {}
  ngOnInit() {
  }

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src =
      'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'; // Substitua pelo caminho da sua imagem padrão
  }
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  showSucess(){
      this.ref = this.dialogService.open(FinalizacaoCheckoutComponent, {
        header: '',
        width: '30%',
        contentStyle: { 'max-height': '500px', 'overflow': 'auto' }
      });
      this.ref.onClose.subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
