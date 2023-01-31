import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {
  @Input() viewItem: any = null;
  @Output() newItemEvent = new EventEmitter<string>();
  orderQuantity: number = 0
  constructor() {
    if (this.viewItem)
      this.viewItem.orderQuantity = 0;
  }

  ngOnInit(): void {
  }

  increaseCount() {
    this.viewItem.orderQuantity = this.viewItem.orderQuantity + 1;
  }

  decreaseCount() {
    if (this.viewItem.orderQuantity >= 1) {
      this.viewItem.orderQuantity = this.viewItem.orderQuantity - 1;

    }
  }

  onAddorder() {
    this.viewItem.totalPrice = this.viewItem.Price * this.viewItem.orderQuantity;

    this.newItemEvent.emit(this.viewItem);
  }

}
