import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  subjectOpenLoginModal = new Subject<boolean>();
  public userDetails: any;
  tokenkey: string = 'userData';
  public newTime: Date;
  constructor(public cookieService: CookieService) {

  }


  setUserdata(data) {
    this.cookieService.set(this.tokenkey, data);
  }

  getUserData() {
    return this.cookieService.get(this.tokenkey);
  }

  removeUserData() {
    this.cookieService.delete(this.tokenkey);
  }

  public get currentTime() {
    setInterval(() => {
      this.newTime = new Date();
    }, 1);
    return this.newTime;
  }

  callSuccessSwal(message) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }
  callErrorSwal(message) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

}
