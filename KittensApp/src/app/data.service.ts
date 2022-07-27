import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "https://dog.ceo/api/breeds/image/random"

  constructor(private http: HttpClient) {
    console.log("Service");
  }

  getCat() {
    return this.http.get(this.url);
  }
}
