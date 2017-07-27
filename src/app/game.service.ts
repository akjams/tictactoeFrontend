import { Injectable } from '@angular/core';

import { Game } from './game';

const ALL_GAMES: Game[] = [
  new Game(0, 'xo---1', 'katie', 'courtney'),
  new Game(1, 'xo---2', 'katie', 'courtney'),
  new Game(2, 'xo---3', 'katie', 'courtney'),
  new Game(3, 'xo---4', 'katie', 'courtney'),
  new Game(4, 'xo---5', 'katie', 'courtney')
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

  getMyGames() {
    return this.games.slice(0, 3);
  }
}