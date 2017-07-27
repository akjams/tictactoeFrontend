export class Game {
  gameId: number;
  state: string;
  usernameX: string;
  usernameY: string;
  constructor(gameId: number, state: string, usernameX: string, usernameY: string) {
    this.gameId = gameId;
    this.state = state;
    this.usernameX = usernameX;
    this.usernameY = usernameY;
  }
}