import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('test') test!: ElementRef
  constructor() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  ngOnInit(): void {
  }

}
