import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor() { }
  @Input() techname = '';
  

  ngOnInit(): void {
  }

}
