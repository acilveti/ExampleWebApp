import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The dating app';
  users: any;

  constructor(private http: HttpClient) {}

  getUsers() {
    
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response
    },error => {
      console.log(error);
    })
  }

  getExampleData() {

    const params = new HttpParams({fromString: 'name_tag=term'});
    
    this.http.request('GET', 'https://localhost:5001/api/ExampleAPI', {responseType:'json', params}).subscribe(response => {
         
      console.log(response)
      
    },error => {
      console.log(error);
    })
  }

  ngOnInit(){
    this.getUsers();
    this.getExampleData();
    
  }
}
