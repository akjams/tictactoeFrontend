import { Injectable } from '@angular/core';

import { Game } from './game';

const ALL_GAMES: Game[] = [
  { state: 'xo------0'},
  { state: 'xo------1'},
  { state: 'xo------2'},
  { state: 'xo------3'},
  { state: 'xo------4'},
  { state: 'xo------5'},
];

@Injectable()
export class GameService {
  games: Game[];

  constructor() {
    this.games = ALL_GAMES;
  }

  getGame(id: number): Game {
    return this.games[id];
  }
}