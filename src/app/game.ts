export class Game {
  gameId: number;
  state: string;
  usernameX: string;
  usernameY: string;
  constructor(gameId: number, state: string, userIdX: string, userIdO: string, winnerId: string, isOver: boolean) {
    this.gameId = gameId;
    this.state = state;
    this.usernameX = userIdX;
    this.usernameY = userIdO;
  }
}