import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Zen Dating App';
  users: any;

  constructor(private http: HttpClient) {} 

  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: () => this.users = response,
      error: () => console.log(Error),
      complete: () => console.log('Request has completed')
    })
  }

  
}
