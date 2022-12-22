import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public woodfordTimeTable: Array<{ day: string, time: string }>
  constructor() { }

  ngOnInit(): void {
    this.woodfordTimeTable = this.getWoodFordTimeTable();
  }

  getWoodFordTimeTable() {
    return [
      { day: 'Monday', time: '11:00am - 11:00pm' },
      { day: 'Tuesday', time: '11:00am - 11:00pm' },
      { day: 'Wednesday', time: '11:00am - 11:00pm' },
      { day: 'Thursday', time: '11:00am - 11:00pm' },
      { day: 'Friday', time: '11:00am - 12:00am' },
      { day: 'Saturday', time: '11:00am - 12:00am' },
      { day: 'Sunday', time: '11:00am - 11:00am' },
    ]
  }
}
