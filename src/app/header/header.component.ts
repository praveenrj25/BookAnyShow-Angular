import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  name: any;

  constructor(private dataService: DataService) {
    this.name = dataService.authName;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
