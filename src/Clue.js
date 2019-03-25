import Rounds from './Rounds.js'
import Player from './Player.js'

class Clue {
  constructor(clue) {
    this.question = clue.question;
    this.pointValue = clue.pointValue;
    this.answer = clue.answer;
    this.categoryId = clue.categoryId;
    this.dailyDouble = false;
  }

  checkAnswer() {
    //this.playerguess = playerinput.value
    // boolean of this.answer === this.playerguess
    if (this.playerGuess === this.answer) {

    }
  }
}

export default Clue;
