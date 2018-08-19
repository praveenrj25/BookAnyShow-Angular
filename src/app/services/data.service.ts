import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('api/events');
  }

  getEventById(id: string) {
    return this.http.get('api/events/' + id);
  }

  createEvent(formdata) {
    return this.http.post('api/events', formdata);
  }

  deleteEvent(id: string) {
    return this.http.delete('api/events/delete/' + id);
  }

  updateEvent(id: string, formdata) {
    return this.http.post('api/events/update/' + id, formdata);
  }

}
