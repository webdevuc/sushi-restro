import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CardListComponent } from './card-list/card-list.component';
import { LocationsModule } from 'src/app/locations/locations.module';
import { LocationsComponent } from 'src/app/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent,
    pathMatch: 'full',
  },


];


@NgModule({
  declarations: [
    DeliveryComponent,
    CommonHeaderComponent,
    CardListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})
export class DeliveryModule { }
