export class Game {
  id: number;
  state: string;
  useridX: number;
  useridO: number;
  winnerId: number;
  turnId: number;
  isOver: boolean;
  constructor(gameId: number, state: string, userIdX: number, userIdO: number, winnerId: string, isOver: boolean) {
    this.id = gameId;
    this.state = state;
    this.useridX = userIdX;
    this.useridO = userIdO;
  }
}