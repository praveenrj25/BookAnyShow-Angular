import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  authName: any = null;

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('http://localhost:8080/api/events');
  }

}
