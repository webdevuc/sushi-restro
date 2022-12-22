import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  refArray: any;

  private lightGallery!: LightGallery;

  constructor() { }

  ngOnInit(): void {
    this.lightGallery
    
  }

  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
    console.log(this.lightGallery);
  };

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

handleResize = () => {
  let highestSlide = 0;

  this.refArray.forEach((ref: { current: { offsetHeight: number; }; }) => {
    if (ref.current && highestSlide < ref.current.offsetHeight) {
      highestSlide = ref.current.offsetHeight;
    }
  });
};


}
