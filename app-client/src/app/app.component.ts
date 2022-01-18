import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;
  constructor(private accoutService:AccountService) {}
  ngOnInit(): void {
    console.log("step 1 from app lifecycle set current user");
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    console.log("step 2 set current user");
    this.accoutService.setCurrentUser(user);
  }
}

