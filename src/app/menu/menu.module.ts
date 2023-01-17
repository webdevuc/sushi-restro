import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { SelectedOrderMenusComponent } from './selected-order-menus/selected-order-menus.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
]

@NgModule({
  declarations: [
    MenuComponent,
    SelectedOrderMenusComponent,
    MenuItemDetailsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MenuModule { }
