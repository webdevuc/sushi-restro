import { AgmMap, MapsAPILoader } from '@agm/core';

import { ChangeDetectorRef, Component, NgZone, OnInit, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { CommanService } from 'src/app/shared/services/comman.service';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-selected-order-menus',
  templateUrl: './selected-order-menus.component.html',
  styleUrls: ['./selected-order-menus.component.scss']
})
export class SelectedOrderMenusComponent implements OnInit {
  @ViewChild(AgmMap, { static: true }) public agmMap: AgmMap;
  @Input() newItem: any = [];
  @Input() storeDetails: any;
  @Output() openMenuItem = new EventEmitter<string>();
  menuItems: Array<any> = [];
  public currencyUsed: string;
  public totalCalculatedPrice: number = 0;
  constructor(private cd: ChangeDetectorRef, private mapsAPILoader: MapsAPILoader, private menuService: MenuService, private commonService: CommanService) {
    if (this.newItem) {
      this.currencyUsed = this.newItem[0]?.Currency;
    }
  }

  ngOnChanges() {
    this.currencyUsed = this.newItem[0]?.Currency;
    this.getTotalPrice();
  }

  ngOnInit(): void {
  }


  get getCurrentTime() {
    return this.commonService.currentTime;
  }



  public getTotalPrice() {
    this.totalCalculatedPrice = 0;
    this.totalCalculatedPrice = this.newItem.map(t => t.totalPrice).reduce((acc, value) => Number(acc) + Number(value), 0);
    this.cd.detectChanges();
  }


  checkoutWithItems() {
    this.menuService.subjectCheckoutItems.next(this.newItem);
  }

  reopenMenuItem(menuItem) {
    this.openMenuItem.emit(menuItem);
  }
}
