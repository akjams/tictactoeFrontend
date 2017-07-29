import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameService } from './game.service';
import { UserService } from './user.service';


@Component ({
  selector: 'my-games',
  template: `
    <ttt-header></ttt-header>
    hello from my games
    <div *ngFor="let mygame of mygames"> <a routerLink='/playgame/{{mygame.gameId}}'> {{mygame.state}} </a> </div>
  `
})

//TODO gameicon here with routerlink to playgame/{id}
export class MyGamesComponent {

  mygames: Game[];
  constructor(private gameService: GameService, private userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.validateAuth();
    this.mygames = this.gameService.getMyGames();
  }
}