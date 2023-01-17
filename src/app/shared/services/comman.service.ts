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
