import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSidenavRoutingModuledule } from './blog-sidenav-routing.module';
import { BlogSidenavComponent } from './blog-sidenav.component';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    BlogSidenavComponent,
    MainComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    BlogSidenavRoutingModuledule,
    SharedModule,
  ]
})
export class BlogSidenavModule { }
