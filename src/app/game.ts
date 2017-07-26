export class Game {
  state: string;
  usernameX: string;
  usernameY: string;
  constructor(state: string, usernameX: string, usernameY: string) {
    this.state = state;
    this.usernameX = usernameX;
    this.usernameY = usernameY;
  }
}