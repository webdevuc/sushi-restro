import { HttpService } from './../../../services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInUpService {
  //customer
  public register: string = 'registration/customer';
  public login: string = 'login/customer';

  constructor(private httService: HttpService) {
  }

  public registerCustomer(data) {
    return this.httService.postData(this.register, data);
  }

  public loginCustomer(data) {
    return this.httService.postData(this.login, data);
  }
}
