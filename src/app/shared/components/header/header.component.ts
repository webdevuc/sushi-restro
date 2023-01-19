import { CommanService } from './../../services/comman.service';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';

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
    private readonly _router: Router, private commanService: CommanService
  ) {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap((e: NavigationEnd) => {
        if (e.url === '/blog') this.isWhiteHeader = true
        else this.isWhiteHeader = false
      })
    ).subscribe()

    this.navMenuItems = this.commanService.getNavMenus();
    let rmmo = document.getElementById('responsive-m-menu-overlay');
    console.log('responsive-m-menu-overlay', rmmo);
  }

  openLoginModal() {
    this.commanService.subjectOpenLoginModal.next(true);
  }

  logOutUser() {

  }

  closeMobleMenu() {
    let element = document.getElementById('mobile-toggle-menu');
    element.click();
  }

}

