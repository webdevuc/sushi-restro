import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/locations/service/locations.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
  }

}
