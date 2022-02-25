import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-activities-cards',
  templateUrl: './activities-cards.component.html',
  styleUrls: ['./activities-cards.component.css']
})
export class ActivitiesCardsComponent implements OnInit {

  

  constructor() { }

  @Input() last_activity = "";

  ngOnInit(): void {
  }

}
