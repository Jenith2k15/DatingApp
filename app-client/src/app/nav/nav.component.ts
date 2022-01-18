import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
    console.log("step 4 from nav lifecycle");
    // this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    console.log("step 5 from nav");
    this.accountService.login(this.model).subscribe(response => {
      console.log("step 10 successfull logined");
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  logout() {
    console.log("step 11 logout from nav");
    this.accountService.logout();
  }
}
