import { LocationsService } from './../service/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.getStoresList();
  }

  getStoresList() {
    this.locationsService.getStores().subscribe(response => {
      console.log('response =>', response);
    }, error => { });
  }

}
