import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SustainabilityRoutingModule } from './sustainability-routing.module';
import { SustainabilityComponent } from './sustainability.component';


@NgModule({
  declarations: [
    SustainabilityComponent
  ],
  imports: [
    CommonModule,
    SustainabilityRoutingModule
  ]
})
export class SustainabilityModule { }
