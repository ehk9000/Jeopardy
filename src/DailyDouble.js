import Clue from './Clue.js'

class DailyD extends Clue {
  constructor(clue) {
    super(clue);
    this.questoin = clue.question;
    this.pointValue = clue.pointValue;
    this.answer = clue.answer;
    this.categoryId = clue.categoryId;
    this.dailyDouble = true;
  }
}

export default DailyD;
