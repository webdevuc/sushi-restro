import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsComponent } from './locations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LocationsListComponent,
    pathMatch: 'full',
  },

  { path: 'store/:id', component: LocationsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
