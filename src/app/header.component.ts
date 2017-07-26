import { Component } from '@angular/core';
@Component ({
  selector: 'ttt-header',
  template: `
      <a routerLink="/home">Home</a>
      <a routerLink="/mygames">My Games</a>
  `,
  styles: ['']
})
export class HeaderComponent {

}