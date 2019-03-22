import dataSet from './dataSet.js'
import player from './Player.js'

class Game extends Rounds {
  constructor(name1, name2, name3) {
    this.p1 = new player(name1, 1);
    this.p2 = new player(name2, 2);
    this.p3 = new player(name3, 3);

    // Round counter
    this.roundCounter = 1

    // playerTurn will only be only 1, 2, or 3
    this.playerTurn = 1;

    this.roundTurn = 1;

    // Category Numbers for Rounds
    this.round1Categories = [1,2,4,6];
    this.round2Categories = [3,7,8,9];
    this.round3Categories = [10];

    // Create round 1
    this.round = new Round(this.round1Categories);
  }

  nextRound() {
    this.counter++
    if (counter == 2) {
       this.round = new Round(this.round2Categories);
    } else {
      this.round = new Round(this.round3Categories);
    }
  }

  chooseWager() {
 // player input that is >= 5 && <= playerDollarAmount || <= pointValue
  }
}

export default Game;
