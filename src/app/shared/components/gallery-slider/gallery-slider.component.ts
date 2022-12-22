import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss']
})
export class GallerySliderComponent implements OnInit {
  galleryImages: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.galleryImages = this.getImages();
  }

  getImages() {
    return [
      'assets/images/reastaurant/restaurant.jpg',
      'assets/images/reastaurant/restaurant1.jpg',
      'assets/images/reastaurant/restaurant2.jpg',
      'assets/images/reastaurant/restaurant3.jpg',
      'assets/images/reastaurant/restaurant4.jpg',
    ]
  }

}
