import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bored-api-interface',
  templateUrl: './bored-api-interface.component.html',
  styleUrls: ['./bored-api-interface.component.css']
})
export class BoredApiInterfaceComponent implements OnInit {

  resp:any = {};
  constructor(private http: HttpClient, ) {}
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
      this.backendAPI(response)
      
    },error => {
      console.log(error);
    })
  }

  backendAPI(response){

    const params = new HttpParams({fromObject: response});
    
    this.http.request('GET', 'https://localhost:5001/api/ExampleAPI', {responseType:'json', params}).subscribe(response => {
          
    console.log("this.backendAPI");
    console.log(response);
    this.resp = response;
    //this.last_activity
      
    },error => {
      console.log(error);
    })

    

  }

}
