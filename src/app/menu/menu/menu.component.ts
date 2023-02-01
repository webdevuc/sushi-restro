import { filter } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../menu.service';
import { checkoutDetails } from '../checkoutDetails';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() newSelectedOrderItemEvent = new EventEmitter<any>();
  menuItems: Array<any> = [];
  categoryList: Array<any> = [];
  public checkoutItems: any;
  public selectedCategoryItem: any;
  public selectedOrderItem: any = [];
  public viewItem: any;
  public isPaymentPage: boolean = false;

  public storesList: Array<any> = [];
  public selectedStore: any;
  publishItems = [];

  private stepper: Stepper;

  selectedTab = 1;

  constructor(private menusService: MenuService) { }

  ngOnInit(): void {
    this.menusService.subjectCheckoutItems.subscribe(response => {
      if (response) {
        this.additems(response);
      }
    });
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
    this.getStoresList();
  }

  getStoresList() {
    this.menusService.getStores().subscribe(response => {
      if (response.status == 200) {
        this.storesList = response.data
      }
    })
  }

  onChangeStore(item) {
    this.selectedStore = item;
    this.getCategories(item.Id);
    this.selectedTab = 2;
  }


  additems(response) {
    this.checkoutItems = response;
    this.selectedTab = 3;
  }

  getCategories(id) {
    this.menusService.getCategories().subscribe(response => {
      if (response.status == 200) {
        this.categoryList = response.data;
        this.selectedCategory(this.categoryList[0], 0);

      }
    }, error => { });
  }
  getProductsByCategory(id) {
    this.menusService.getProductsByCategoryId(id).subscribe(response => {
      if (response.status == 200) {
        this.menuItems = response.data;
      }
    }, error => { });
  }

  selectedCategory(item, i) {
    this.selectedCategoryItem = item;
    this.getProductsByCategory(this.selectedCategoryItem.Id);
  }

  selectOrder(item) {
    if (item) {
      this.viewItem = item;
      this.viewItem.orderQuantity = 0;

      document.getElementById("openStaticModalButton").click();
    }

  }

  addItem(event) {
    if (this.selectedOrderItem.length) {
      this.selectedOrderItem.filter((element, index) => {
        console.log(element.Id, event.Id)
        if (element.Id === event.Id) {
          delete this.selectedOrderItem[index];
          this.selectedOrderItem.push(event);
        } else {
          this.selectedOrderItem.push(event);
        }
      })
    } else {
      this.selectedOrderItem.push(event);
    }

    document.getElementById("closeModalButton").click();

    let updatedArray = this.selectedOrderItem.filter((item,
      index) => this.selectedOrderItem.indexOf(item) === index);
    this.publishItemsArray(updatedArray);
  }

  publishItemsArray(newArray) {
    console.log(newArray);
    this.publishItems = newArray;
  }

  menuTrackBy(index, item) {
    return item;
  }

  next() {
    this.stepper.next();
  }


  openMenuItem(event) {
    this.selectOrder(event);
  }
}
