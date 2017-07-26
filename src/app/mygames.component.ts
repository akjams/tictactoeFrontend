import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameService } from './game.service';

@Component ({
  selector: 'my-games',
  template: `
    hello from my games
    <div *ngFor="let mygame of mygames"> {{mygame.state}} </div>
  `
})

//TODO gameicon here with routerlink to playgame/{id}
export class MyGamesComponent {

  mygames: Game[];
  constructor(private gameService: GameService) {}
  
  ngOnInit(): void {
    this.mygames = this.gameService.getMyGames();
  }
}