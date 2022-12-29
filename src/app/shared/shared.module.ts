import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { GallerySliderComponent } from './components/gallery-slider/gallery-slider.component';
import { HttpClientModule } from '@angular/common/http';

const components = [
  HeaderComponent,
  FooterComponent,
  BookTableComponent,
  GallerySliderComponent
]

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    modules
  ],
  exports: [
    modules,
    ...components
  ],
  providers: []

})
export class SharedModule { }
