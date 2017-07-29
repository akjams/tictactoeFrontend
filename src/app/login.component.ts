import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'login',
  template: ` 
    Login Page
    <div>
      <label>User Name</label>
      <input [(ngModel)]="userName" (keyup.enter)="loginButton()">
    </div>
    <span>{{message}}</span> <br> <br>
    <button (click)="loginButton()" type="submit">Login</button>
    
  `
})
export class LoginComponent implements OnInit {

  userName: string;
  message: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    
  }

  loginButton() {
    if (this.userService.login(this.userName)) {
      this.router.navigateByUrl('home');
    } else {
      this.message = "Error: invalid username";
    }
  }

}