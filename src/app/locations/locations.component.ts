import { LocationsService } from './service/locations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public woodfordTimeTable: Array<{ day: string, time: string }>
  public storeDetails: any;

  constructor(private locationsService: LocationsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getDetailsById(id);
  }

  getDetailsById(id) {
    this.storeDetails = this.locationsService.getStoresJson().filter(element => element.id == id)[0];
  }

  getURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
