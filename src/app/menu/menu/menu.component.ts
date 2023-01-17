import { filter } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() newSelectedOrderItemEvent = new EventEmitter<any>();
  menuItems: Array<any> = [];
  categoryList: Array<any> = [];
  public selectedCategoryItem: any;
  public selectedOrderItem: any = [];
  public viewItem: any;
  constructor(private menusService: MenuService) { }

  ngOnInit(): void {
    this.getCategories();
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
    // this.selectedOrderItem.push(item);
  }

  addItem(event) {
    // console.log('event', event);
    if (this.selectedOrderItem.length) {
      this.selectedOrderItem.filter(element => {
        if (element.Id == event.Id) {
          console.log('test');
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
