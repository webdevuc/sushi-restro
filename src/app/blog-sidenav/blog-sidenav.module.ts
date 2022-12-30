import { CommonHeaderComponent } from './components/common-header/common-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSidenavRoutingModuledule } from './blog-sidenav-routing.module';
import { BlogSidenavComponent } from './blog-sidenav.component';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { ContentComponent } from './components/main/content/content.component';



@NgModule({
  declarations: [
    BlogSidenavComponent,
    MainComponent,
    SideNavComponent,
    CommonHeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BlogSidenavRoutingModuledule,
    SharedModule,
  ]
})
export class BlogSidenavModule { }
