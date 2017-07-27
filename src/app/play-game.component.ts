import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

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

  constructor(private gameService: GameService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => this.game = this.gameService.getGame(+paramMap.get('id')));
  }
}