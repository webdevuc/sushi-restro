import { RouterModule } from '@angular/router';
import { LocationsComponent } from './locations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationsListComponent,
    CommonHeaderComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class LocationsModule { }
