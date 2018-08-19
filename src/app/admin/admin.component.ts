import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  events$: Object;
  error = false;
  isEventCreated = true;
  selectedFile: File = null;
  toUpdateEvent: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(
      data => { this.events$ = data; },
      error => { this.error = true; }
    );
  }

  showCrateEventForm() {
    $('#create').css('display', 'block');
    $('#update').css('display', 'none');
    const element = document.querySelector('#create');
    element.scrollIntoView({ behavior: 'smooth' });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onCreateEvent(event) {
    const target = event.target;
    const formdata: FormData = new FormData();
    formdata.append('name', target.querySelector('#name').value);
    formdata.append('venue', target.querySelector('#venue').value);
    formdata.append('startDate', target.querySelector('#startDate').value);
    formdata.append('endDate', target.querySelector('#endDate').value);
    formdata.append('image', this.selectedFile, this.selectedFile.name);

    this.data.createEvent(formdata).subscribe(
      data => {
        $('#create').css('display', 'none');
        this.ngOnInit();
      },
      error => {
        this.isEventCreated = false;
      }
    );
  }

  onDeleteEvent(eventId: string) {
    this.data.deleteEvent(eventId).subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }

  showUpdateForm(eventId: string) {
    $('#update').css('display', 'block');
    $('#create').css('display', 'none');
    const element = document.querySelector('#update');
    element.scrollIntoView({ behavior: 'smooth' });
    this.data.getEventById(eventId).subscribe(
      data => {
        this.toUpdateEvent = data;
      },
      error => {
        this.isEventCreated = false;
      }
    );
  }

  onUpdateEvent(event) {
    const target = event.target;
    const formdata: FormData = new FormData();
    formdata.append('name', target.querySelector('#upname').value);
    formdata.append('venue', target.querySelector('#upvenue').value);
    formdata.append('startDate', target.querySelector('#upstartDate').value);
    formdata.append('endDate', target.querySelector('#upendDate').value);
    formdata.append('image', this.selectedFile, this.selectedFile.name);

    const id = target.querySelector('#upid').value;
    this.data.updateEvent(id, formdata).subscribe(
      data => {
        $('#update').css('display', 'none');
        this.ngOnInit();
      },
      error => {
        this.isEventCreated = false;
      }
    );
  }

}
