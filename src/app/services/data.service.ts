import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  service() {
    return console.log('Hello from service');
  }
}

