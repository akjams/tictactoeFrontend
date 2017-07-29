import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component ({
  selector: 'ttt-header',
  template: `
      <div>
        <a routerLink="/home">Home</a>
        <a routerLink="/mygames">My Games</a>
      </div>
  `,
  styles: ['']
})
export class HeaderComponent {

}