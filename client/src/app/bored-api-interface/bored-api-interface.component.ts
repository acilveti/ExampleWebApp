import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bored-api-interface',
  templateUrl: './bored-api-interface.component.html',
  styleUrls: ['./bored-api-interface.component.css']
})
export class BoredApiInterfaceComponent implements OnInit {

 
  constructor(private http: HttpClient) {}
  @Input() activity = 'Press next idea';
  @Input() activity_type = '';
  @Input() activity_price = '';
  @Input() activity_participants = '';
  

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('You have clicked the button.');
        
    this.http.get('http://www.boredapi.com/api/activity/').subscribe(response => {
         
      this.activity = response['activity'];
      this.activity_type = response['type'];
      this.activity_price = response['price'];
      this.activity_participants = response['participants'];
      console.log(response);
      this.backendAPI()
      
    },error => {
      console.log(error);
    })
  }

  backendAPI(){

    this.http.get('https://localhost:5001/api/ExampleAPI').subscribe(response => {
         
    console.log("this.backendAPI");
      
    },error => {
      console.log(error);
    })

    

  }

}
