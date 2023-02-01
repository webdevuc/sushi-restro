import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../shared/services/http.service';
import { checkoutDetails } from './checkoutDetails';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public subjectCheckoutItems = new Subject<any>();
  public category: string = 'category';
  public product: string = 'product';
  constructor(private api: HttpService) { }

  getStores() {
    return this.api.getData('/store/get-stores');
  }
  getCategories() {
    return this.api.getData(this.category + '/get-all-category');
  }
  getProductsByCategoryId(id) {
    return this.api.getData(this.product + '/get-products-by-category/' + id);
  }

}
