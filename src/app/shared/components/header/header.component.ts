import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isWhiteHeader: boolean = false

  constructor(
    private readonly _router: Router
  ) {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap((e: NavigationEnd) => {
        if(e.url === '/blog') this.isWhiteHeader = true
        else this.isWhiteHeader = false
      })
    ).subscribe()
  }

}

