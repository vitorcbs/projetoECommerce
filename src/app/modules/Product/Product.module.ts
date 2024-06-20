import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './Product.component';
import { ProductService } from './services/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { GalleriaModule } from 'primeng/galleria';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCheckoutComponent } from './pages/product-checkout/product-checkout.component';
import { StepperModule } from 'primeng/stepper';
import { CartItensComponent } from './pages/product-checkout/components/cart-itens/cart-itens.component';
import { EnderecoCheckoutComponent } from './pages/product-checkout/components/endereco-checkout/endereco-checkout.component';
import { CardPaymentFormComponent } from './pages/product-checkout/components/pagamento-checkout/pagamento-checkout.component';
import { RevisaoCheckoutComponent } from './pages/product-checkout/components/revisao-checkout/revisao-checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinalizacaoCheckoutComponent } from './pages/product-checkout/components/finalizacao-checkout/finalizacao-checkout.component';
import { DialogService } from 'primeng/dynamicdialog';

const routes: Routes = [
  { path: 'checkout', component: ProductCheckoutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    GalleriaModule,
    CardModule,
    ButtonModule,
    RouterModule.forChild(routes),
    StepperModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductComponent,
    ProductCardComponent,
    ProductCardListComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductCheckoutComponent,
    CartItensComponent,
    EnderecoCheckoutComponent,
    CardPaymentFormComponent,
    RevisaoCheckoutComponent,
    FinalizacaoCheckoutComponent
  ],
  providers: [ProductService, DialogService],
  exports: [
    ProductCardComponent,
    ProductCardListComponent,
    CartComponent,
    ProductCheckoutComponent,
  ],
})
export class ProductModule {}
