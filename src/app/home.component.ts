import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'ttt-home',
  template: `
    <ttt-header></ttt-header>
    home`
})
export class HomeComponent {

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.validateAuth();
  }
}
