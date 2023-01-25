import { Component, Input, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommanService } from 'src/app/shared/services/comman.service';
import { checkoutDetails } from '../checkoutDetails';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent implements OnInit {
  @Input() public checkoutItems = [];
  public checkoutDetails: checkoutDetails | undefined;
  public tips: Array<number> = [5, 10, 15, 20];
  public currencyUsed: string;
  public vat: number = 0;

  isShowToday: boolean = true;
  isShowCurrent: boolean = true;
  selectedDate = new Date();
  selectedTime: any;
  currentTime: any;

  viewDate: Date = new Date();

  public minDate: Date = new Date();
  // public maxDate: Date = new Date("08/27/2017");
  public value: Date = new Date();

  constructor(private commonService: CommanService, private cdr: ChangeDetectorRef) {
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
    this.currentTime = this.commonService.currentTime;
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

  onDatetoggleChange(event) {
    this.isShowToday = event.target.checked;
  }

  onDateChange(event) {
    this.selectedDate = event.target.value;
    this.cdr.detectChanges();

  }
  onTimetoggleChange(event) {
    this.isShowCurrent = event.target.checked;
  }

}
