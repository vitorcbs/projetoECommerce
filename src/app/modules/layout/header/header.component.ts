import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { LoginComponent } from '../../login/login.component';
import { LoginModule } from '../../login/login.module';
import { ProductModule } from '../../Product/Product.module';
import { CartComponent } from '../../Product/components/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BadgeModule,
    RouterModule,
    DialogModule,
    LoginModule,
    DynamicDialogModule,
    OverlayPanelModule,
    ProductModule
  ],
  providers: [DialogService], 
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild(CartComponent, { static: false }) cartPanel: CartComponent;
  displayLoginDialog = false;
  dialogRef!: DynamicDialogRef;
  Logged!: boolean;

  constructor(private readonly dialogService: DialogService) {}
  ngAfterViewInit(): void {
    if (this.cartPanel) {
      this.onCartPanelOpened();
    }
  }

  onClickLogin() {
    this.dialogRef = this.dialogService.open(LoginComponent, {
      width: '20vw',
      contentStyle: { width: '100%' },
      baseZIndex: 9999,
    });

    this.dialogRef.onClose.subscribe(() => {
      this.getLoggedUser()
  });
  }

  getLoggedUser(){
    const storedUser = localStorage.getItem('loggedInUser');
    console.log(storedUser)
    if (!storedUser) {
      this.Logged = false
    } else {
      this.Logged = true
    }
  }
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.getLoggedUser()
    }
  }

  onCartPanelOpened() {
    console.log("Clickad")
    this.cartPanel.updateCartItems();
  }


}
