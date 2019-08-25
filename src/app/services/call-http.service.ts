import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallHTTPService {

  private url = 'https://challenge.thef2e.com/api/thef2e2019/stage6/';
  private _headers = { 
    headers: new HttpHeaders()
    .set('Authorization', 'Bearer Jnuz37HrHeF9rdTGjf1vNzbsOCfZgWNWy8ZGQAQQjBZ8mJ28OObfMeymoX5')
    .set('accept', 'application/json')
    .set('Content-Type','application/json')
  };

  constructor(
    public _http:HttpClient
  ) { }

  getAll(){
    return this._http.get(this.url + 'rooms', this._headers)
  }

  getSingle(id){
    return this._http.get(this.url + `room/${id}`, this._headers)
  }

  postBooking(book, id){
    return this._http.post(this.url + `room/${id}`, book, this._headers)
  }
}
