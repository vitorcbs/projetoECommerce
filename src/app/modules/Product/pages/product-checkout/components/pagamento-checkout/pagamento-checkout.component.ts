import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagamento-checkout',
  templateUrl: './pagamento-checkout.component.html',
  styleUrls: ['./pagamento-checkout.component.scss'],
})
export class CardPaymentFormComponent {
  @Output() paymentSubmit = new EventEmitter<any>();

  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      expiryDate: [
        '',
        [Validators.required, Validators.pattern('(0[1-9]|1[0-2])[/][0-9]{2}')],
      ],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]],
      cardholderName: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.cardForm.valid)
      this.paymentSubmit.emit(this.cardForm.value);
  }
}
