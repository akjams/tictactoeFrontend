import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';


import { User } from './user';

const ALL_USERS: User[] = [
    new User(1, "tj"),
    new User(2, "katie"),
    new User(3, "courney")
];

@Injectable()
export class UserService {
  basePath = 'http://127.0.0.1:8000/games/';
  
  private loggedInUser: User;
  private users: User[];
  private jsonHeader: HttpHeaders;
    
  constructor(private httpClient: HttpClient, private router: Router) {
    this.users = ALL_USERS;
    this.jsonHeader = new HttpHeaders();
    this.jsonHeader = this.jsonHeader.set('Content-Type', 'application/json');
  }

  // TODO use http
  private getUserByName(userName: string): Observable<User> {
      return this.httpClient.get<User>(this.basePath + 'users?name=' + userName);
  }

  validateAuth() {
    if (this.loggedInUser === undefined) {
      this.router.navigateByUrl('/login');
    }
  }

  login(userName: string, callback?: Function): void {
      this.getUserByName(userName).subscribe( user => {
      this.setLoggedInUser(user);
      callback(true);
      },
      () => callback(false)
    );
  }

  setLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }

  createNewAccount(userName: string, callback: Function): void {
    let user = new User(null, userName);
      this.httpClient.post<HttpResponse<User>>(this.basePath + 'users', JSON.stringify(user), {headers: this.jsonHeader}).subscribe(response => { 
          callback(true);
          this.login(userName);
        }, 
        () => callback(false), 
      );
  }
}

