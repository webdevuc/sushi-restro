import { CommanService } from './../../services/comman.service';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isWhiteHeader: boolean = false;
  isUserLoggedIn: boolean = false;
  isNavClicked: boolean = false;
  navMenuItems: Array<any> = [];

  constructor(
    private readonly _router: Router, private commanService: CommanService, private authService: AuthenticationService
  ) {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap((e: NavigationEnd) => {
        if (e.url === '/blog') this.isWhiteHeader = true
        else this.isWhiteHeader = false
      })
    ).subscribe()

    this.authService.currentUser.subscribe(response => {
      if (response) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });

    this.navMenuItems = this.commanService.getNavMenus();

  }

  openLoginModal() {
    this.commanService.subjectOpenLoginModal.next(true);
  }

  logOutUser() {
    this.authService.logout();
  }

  closeMobleMenu() {
    let element = document.getElementById('mobile-toggle-menu');
    element.click();
  }

}

