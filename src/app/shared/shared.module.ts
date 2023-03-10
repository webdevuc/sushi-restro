import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { GallerySliderComponent } from './components/gallery-slider/gallery-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeInputModule } from 'angular-code-input';

const components = [
  HeaderComponent,
  FooterComponent,
  BookTableComponent,
  GallerySliderComponent
]

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule,
  CodeInputModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDkma2m0XOpSD7tMiqxY1eJJiH9YmsmcuQ',
    libraries: ['places']
  }),
]

@NgModule({
  declarations: [
    ...components,
    SignInComponent,
    RegisterComponent,
  ],
  imports: [
    modules
  ],
  exports: [
    modules,
    SignInComponent,
    RegisterComponent,
    ...components
  ],
  providers: []

})
export class SharedModule { }
