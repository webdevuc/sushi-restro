import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public category: string = 'category';
  public product: string = 'product';
  constructor(private api: HttpService) { }

  getCategories() {
    return this.api.getData(this.category + '/get-all-category');
  }
  getProductsByCategoryId(id) {
    return this.api.getData(this.product + '/get-products-by-category/' + id);
  }

}
