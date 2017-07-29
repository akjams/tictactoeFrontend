import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './user';

const ALL_USERS: User[] = [
    new User(1, "tj"),
    new User(2, "katie"),
    new User(3, "courney")
];

@Injectable()
export class UserService {
  
  private loggedInUser: User;
  private users: User[];
    
  constructor(private httpClient: HttpClient, private router: Router) {
    this.users = ALL_USERS;
  }

  // TODO use http
  private getUserByName(userName: string): User {
      return this.users.find( u => u.name === userName);
  }

  validateAuth() {
    if (this.loggedInUser === undefined) {
      this.router.navigateByUrl('/login');
    }
  }

  login(userName: string ): boolean {
    let user = this.getUserByName(userName);
    if (user !== undefined) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }
}

