import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { SelectedOrderMenusComponent } from './selected-order-menus/selected-order-menus.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { PaymentComponent } from './payment/payment.component';
import { DatepickerModule } from 'ng2-datepicker';
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
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    DatepickerModule
    
  ]
})
export class MenuModule { }
