import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Game } from './game';
import { GameService } from './game.service';
import { UserService } from './user.service';

@Component({
  selector: 'play-game',
  template: `
    <ttt-header></ttt-header>
    <h1> Play Game </h1>
    <div *ngIf="game">
    {{game.state}}
    </div>
    
  `
})
export class PlayGameComponent implements OnInit {
  @Input() gameId: number;
  game: Game;

  constructor(private gameService: GameService, private userService: UserService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.userService.validateAuth();
    this.route.paramMap.subscribe(paramMap => this.gameService.getGame(+paramMap.get('id')).subscribe(game => this.game = game));
  }
}