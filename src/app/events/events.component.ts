import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(
      data => this.events$ = data
    );
  }

}
