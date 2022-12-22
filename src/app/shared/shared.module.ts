import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { GallerySliderComponent } from './components/gallery-slider/gallery-slider.component';

const components = [
  HeaderComponent,
  FooterComponent,
  BookTableComponent,
  GallerySliderComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ],
  providers: []

})
export class SharedModule { }
