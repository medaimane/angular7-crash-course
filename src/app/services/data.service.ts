import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  service() {
    return console.log('Hello from service');
  }

  getUsers() {
    // Users from an public API : https://reqres.in/
    return this.http.get(`${this.url}/api/users?page=1`);
  }
}

