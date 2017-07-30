import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Game } from './game';
import { UserService } from './user.service';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


const ALL_GAMES: Game[] = [
  new Game(0, 'xo---1', 2, 3, null, false),
  new Game(1, 'xo---2', 2, 3, null, false),
  new Game(2, 'xo---3', 2, 3, null, false),
  new Game(3, 'xo---4', 2, 3, null, false),
  new Game(4, 'xo---5', 2, 3, null, false)
];

@Injectable()
export class GameService {
  basePath = 'http://127.0.0.1:8000/games/';
  games: Game[];

  constructor(private httpClient: HttpClient, private userService: UserService) {
    this.games = ALL_GAMES;
  }

  getGame(id: number): Observable<Game> {
    // just use a callback?
    // CROSS ORIGIN
    return this.httpClient.get<Game>(this.basePath + 'games/' + id);
    //return this.games[id];
  }

  getMyGames(): Observable<Game[]>{
    let user = this.userService.getLoggedInUser();
    return this.httpClient.get<Game[]>(this.basePath + 'games?userid=' + user.id);
  }

  // unmarshallGame(input: Object): Game {
  //   console.log(input);
  //   return new Game(input['id'], input['state'], input['user_id_x'], input['user_id_o'], input['winnder_id'], input['is_over']);
  // }
}