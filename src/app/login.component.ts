import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'login',
  template: ` 
    Been here before? Login:
    <div>
      <label>User Name</label>
      <input [(ngModel)]="userName" (keyup.enter)="loginButton()">
    </div>
    <span>{{message}}</span> <br> <br>
    <button (click)="loginButton()" type="submit">Login</button>
    <br><br><br><br><br>
    Create a new account:
    <div>
      <label>User Name</label>
      <input [(ngModel)]="createNewAccountName" (keyup.enter)="createNewAccountButton()">
    </div>
    <span>{{newAccountMessage}}</span> <br> <br>
    <button (click)="createNewAccountButton()" type="submit">Login</button>
    
  `
})
export class LoginComponent implements OnInit {

  userName: string;
  createNewAccountName: string;
  message: string;
  newAccountMessage: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    
  }

  loginButton() {
    this.userService.login(this.userName, success => {
      if (success) {
        this.router.navigateByUrl('home');
      } else {
        this.message = "Error: invalid username";
      }
    });
  }

  createNewAccountButton() {
    this.userService.createNewAccount(this.createNewAccountName, okay => {
        if (okay) {
        this.router.navigateByUrl('home');
      } else {
        this.newAccountMessage = "Sorry, that name is taken";
      }
    });
  } 

}