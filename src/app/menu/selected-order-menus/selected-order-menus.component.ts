import { AgmMap, MapsAPILoader } from '@agm/core';

import { ChangeDetectorRef, Component, NgZone, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  @Input() newItem: any = null;
  menuItems: Array<any> = [];
  public currencyUsed: string;
  public totalCalculatedPrice: number = 0;
  private geoCoder;
  public myLocation: string;
  constructor(private cd: ChangeDetectorRef, private mapsAPILoader: MapsAPILoader, private menuService: MenuService, private commonService: CommanService) {

    if (this.newItem) {
      this.currencyUsed = this.newItem[0].Currency;
      this.mapsAPILoader.load().then(() => {
        this.getLocation();
        this.geoCoder = new google.maps.Geocoder();
      });
    }
  }



  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.getLocation();
      this.geoCoder = new google.maps.Geocoder();
    });
  }

  get getCurrentTime() {
    return this.commonService.currentTime;
  }

  ngDoCheck() {
    this.getTotalPrice();
  }

  public getTotalPrice() {
    this.totalCalculatedPrice = 0;
    this.totalCalculatedPrice = this.newItem.map(t => t.totalPrice).reduce((acc, value) => Number(acc) + Number(value), 0);
    this.cd.detectChanges();
  }

  getLocation() {

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        this.getAddress(latitude, longitude);
      });
    }

  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.myLocation = results[0].address_components[2].long_name;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  checkoutWithItems() {
    this.menuService.subjectCheckoutItems.next(this.newItem);
  }
}
