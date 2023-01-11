import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.scss']
})
export class MenuItemDetailsComponent implements OnInit {
  @Input() viewItem: any = null;
  orderQuantity: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
