import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public host = `${environment.baseUrl}` // host base url

  constructor(private http: HttpClient) { }

  public getOptionsWithBody() {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
    const httpOptions = {
      headers: headers,
      // observe: 'response' as 'body'
    }
    return httpOptions;
  }

  getData(urlWithQueryParam: string): Observable<any> {
    return this.http.get(this.host + urlWithQueryParam, this.getOptionsWithBody()).pipe(map(
      response => {
        return response
      }));
  }

  postData(url: string, postData: any): Observable<any> {
    return this.http.post<any>(this.host + url, postData, this.getOptionsWithBody()).pipe(map(
      response => {
        return response
      }));
  }

}
