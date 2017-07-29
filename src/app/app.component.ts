import { Component } from '@angular/core';

import { GameService } from './game.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService, UserService]
})
export class AppComponent {
  title = 'TicTacToe';
}
