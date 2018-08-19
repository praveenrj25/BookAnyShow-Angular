import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events$: Object;
  error = false;
  @Input() searchQuery: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(
      data => { this.events$ = data; },
      error => { this.error = true; }
    );
  }

}
