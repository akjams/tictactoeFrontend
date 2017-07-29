import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Game } from './game';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


const ALL_GAMES: Game[] = [
  new Game(0, 'xo---1', 'katie', 'courtney', null, false),
  new Game(1, 'xo---2', 'katie', 'courtney', null, false),
  new Game(2, 'xo---3', 'katie', 'courtney', null, false),
  new Game(3, 'xo---4', 'katie', 'courtney', null, false),
  new Game(4, 'xo---5', 'katie', 'courtney', null, false)
];

@Injectable()
export class GameService {
  basePath = 'http://127.0.0.1:8000/';
  games: Game[];

  constructor(private httpClient: HttpClient) {
    this.games = ALL_GAMES;
  }

  getGame(id: number): Observable<Game> {
    // just use a callback?
    // CROSS ORIGIN
    return this.httpClient.get(this.basePath + 'games/' + id).map(input => this.unmarshallGame(input));
    //return this.games[id];
  }

  getMyGames() {
    return this.games.slice(0, 3);
  }

  unmarshallGame(input: Object): Game {
    console.log(input);
    return new Game(input['id'], input['state'], input['user_id_x'], input['user_id_o'], input['winnder_id'], input['is_over']);
  }
}