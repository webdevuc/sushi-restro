import { LocationsComponent } from './locations/locations.component';
import { SustainabilityModule } from './sustainability/sustainability.module';
import { LocationsModule } from './locations/locations.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'blog',
    loadChildren: () => import('./blog-sidenav/blog-sidenav.module').then(m => m.BlogSidenavModule)
  },
  {
    path: 'news-and-offers',
    loadChildren: () => import('./blog-sidenav/blog-sidenav.module').then(m => m.BlogSidenavModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'sustainability',
    loadChildren: () => import('./sustainability/sustainability.module').then(m => m.SustainabilityModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./delivery/delivery/delivery.module').then(m => m.DeliveryModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
