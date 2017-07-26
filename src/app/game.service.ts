import { Injectable } from '@angular/core';

import { Game } from './game';

const ALL_GAMES: Game[] = [
  new Game('xo---1', 'katie', 'courtney'),
  new Game('xo---2', 'katie', 'courtney'),
  new Game('xo---3', 'katie', 'courtney'),
  new Game('xo---4', 'katie', 'courtney'),
  new Game('xo---5', 'katie', 'courtney')
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