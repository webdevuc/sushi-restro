import { LocationsService } from 'src/app/locations/service/locations.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  storeLocations: Array<any> = [];
  constructor(private location: LocationsService, private router: Router) { }

  ngOnInit(): void {
    this.storeLocations = this.location.getStoresJson();
  }

  redirectToDetails(id) {
    this.router.navigate(['/locations/store/', id]);
  }



}
