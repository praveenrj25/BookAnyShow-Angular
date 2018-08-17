import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  authType: any;

  constructor(private dataService: DataService) {
    this.authType = dataService.authName;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
