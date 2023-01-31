import { CommanService } from './shared/services/comman.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sushi_new';
  public isSignIn: boolean = true;
  constructor(private commanService: CommanService) { }

  ngOnInit() {
    this.commanService.subjectOpenLoginModal.subscribe(response => {
      if (response == true) {
        this.openModal();
      } else {
        this.closeModal();
      }
    })
  }

  openModal() {
    document.getElementById("openModalButton").click();
  }
  closeModal() {
    document.getElementById("closeModalButton").click();
    $('#loginModal').hide();
    $('.modal-backdrop').hide();
  }
}
