import { Component, Input, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommanService } from 'src/app/shared/services/comman.service';
import { checkoutDetails } from '../checkoutDetails';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent implements OnInit {
  @Input() public checkoutItems = [];
  @Input() public storeDetails: any;
  public checkoutDetails: checkoutDetails | undefined;
  public tips: Array<number> = [5, 10, 15, 20];
  public currencyUsed: string;
  public vat: number = 0;
  tipAmout: number = 0;

  isShowToday: boolean = false;
  isShowCurrent: boolean = false;
  selectedDate = new Date();
  selectedTime: any;
  currentTime: any;
  notes: string;

  public selectedTimeFormat = 'asap';

  displayErrorMessage: string;


  // options sample with default values
  options: DatepickerOptions = {
    minDate: new Date(),
    minYear: getYear(new Date()) - 30, // minimum available and selectable year
    maxYear: getYear(new Date()) + 30, // maximum available and selectable year
    placeholder: '', // placeholder in case date model is null | undefined, example: 'Please pick a date'
    format: 'LLLL do yyyy', // date format to display in input
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEE',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: locale, // date-fns locale
    position: 'bottom',
    inputClass: 'datepicker-input-container', // custom input CSS class to be applied
    calendarClass: 'datepicker-container', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#dfe3e9', // in case you customize you theme, here you define scroll bar color
    // keyboardEvents: true // enable keyboard events

  };
  constructor(private commonService: CommanService, private cdr: ChangeDetectorRef) {
  }

  get getCurrentTime() {
    return this.commonService.currentTime;
  }

  get subTotal() {
    return this.checkoutItems.map(t => t.totalPrice).reduce((acc, value) => Number(acc) + Number(value), 0);
  }

  gettotal() {
    let totalaMount = this.subTotal + this.vat + this.tipAmout;
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
    this.tipAmout = (item / 100) * this.subTotal;
    this.gettotal();
  }

  cancelTip() {
    this.tipAmout = 0;
    this.gettotal();
  }

  getSubtotal(items?: any) {
    let subTotal = this.checkoutItems.map(t => t.totalPrice).reduce((acc, value) => Number(acc) + Number(value), 0);
    return subTotal;
  }

  makePayment() {
    let userDetails = localStorage.getItem('currentUser');
    let user = JSON.parse(userDetails);
    if (user) {
      let params = this.getParamsRequired(user.userData);
      this.callPayment(params);
    } else {
      this.displayErrorMessage = 'Please login into your account.';
      this.clearAlert();
    }
  }

  callPayment(params) { }

  onDatetoggleChange(event) {
    this.isShowToday = event.target.checked;
    if (this.isShowToday) {
      this.selectedDate = new Date();
    }
    // if (this.isShowToday==false) {
    // let element = document.getElementById('datepicker')
    // console.log(element);
    // element.click();
    // }
  }

  onDateChange(event) {
    this.selectedDate = event.target.value;
    this.cdr.detectChanges();
  }
  onTimetoggleChange(event) {
    if (event.target.checked) {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.selectedTime = time;
    }
    this.isShowCurrent = event.target.checked;
  }

  getParamsRequired(userDetails) {

    let data = userDetails;

    let orderdata = [];
    this.checkoutItems.forEach(element => {
      let param = {
        ProductId: element.Id,
        Price: element.totalPrice,
        Quantity: element.orderQuantity
      }
      orderdata.push(param);
    });
    let params = {
      SubTotal: this.subTotal,
      Vat: this.vat,
      Tip: this.tipAmout.toFixed(2),
      GrandTotal: this.gettotal(),
      FirstName: data['FirstName'],
      LastName: data['SureName'],
      Address: "string",
      Email: data['Email'],
      Mobile: data['TelePhoneNumber'],
      TimingStatus: 0,
      StoreId: 0,
      LaterDateTime: "string",
      Notes: this.notes,
      OrderItems: orderdata
    }

    return params
  }

  clearAlert() {
    setTimeout(() => {
      this.displayErrorMessage = null;
    }, 1000);
  }

}
