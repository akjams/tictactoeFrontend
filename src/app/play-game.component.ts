import { Component, Input, OnInit } from '@angular/core';

import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'play-game',
  template: `
    <h1> Play Game </h1>
    <div *ngIf="game">
    {{game.state}}
    </div>
    
  `
})
export class PlayGameComponent implements OnInit {
  @Input() gameId: number;
  game: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.game = this.gameService.getGame(this.gameId);
  }
}