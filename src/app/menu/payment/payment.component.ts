import { Component, Input, OnInit } from '@angular/core';
import { CommanService } from 'src/app/shared/services/comman.service';
import { checkoutDetails } from '../checkoutDetails';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() public checkoutItems = [];
  public checkoutDetails: checkoutDetails | undefined;
  public tips: Array<number> = [5, 10, 15, 20];
  public currencyUsed: string;
  public vat: number = 0;


  constructor(private commonService: CommanService) {
  }

  get getCurrentTime() {
    return this.commonService.currentTime;
  }

  get subTotal() {
    return this.checkoutItems.map(t => t.totalPrice).reduce((acc, value) => Number(acc) + Number(value), 0);
  }

  get total() {
    let totalaMount = this.subTotal + this.vat;
    return totalaMount
  }
  get CurrencyUse() {
    return this.checkoutItems[0].Currency;
  }

  ngOnInit(): void {
  }

  addDiscount(item) {

  }

  addTip(item) {
    this.checkoutDetails.tip = item;
  }

  getSubtotal(items?: any) {
    let subTotal = this.checkoutItems.map(t => t.totalPrice).reduce((acc, value) => Number(acc) + Number(value), 0);
    return subTotal;
  }

  makePayment() {

  }

}
