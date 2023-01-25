import { filter } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../menu.service';
import { checkoutDetails } from '../checkoutDetails';

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
  public isPaymentPage: boolean = true;

  constructor(private menusService: MenuService) { }

  ngOnInit(): void {
    this.getCategories();
    this.menusService.subjectCheckoutItems.subscribe(response => {
      if (response) {
        this.additems(response);
      }
    })
  }

  additems(response) {
    this.checkoutItems = response;
    this.isPaymentPage = true;  
  }

  getCategories() {
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

  selectOrderItem(item) {
    this.viewItem = item;
    this.viewItem.orderQuantity = 0;
    document.getElementById("openStaticModalButton").click();
  }

  addItem(event) {
    if (this.selectedOrderItem.length) {
      this.selectedOrderItem.filter(element => {
        if (element.Id == event.Id) {
          element.orderQuantity = event.orderQuantity;
        } else {
          this.selectedOrderItem.push(event);
        }
      })
    } else {
      this.selectedOrderItem.push(event);
    }

    document.getElementById("closeModalButton").click();
  }

}
