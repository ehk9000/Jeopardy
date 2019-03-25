import dataSet from './dataSet.js'
import Game from './Game.js'

class Rounds {
  constructor(categoryIds) {
    this.categoryIds = categoryIds;
    // console.log('Rounds class Categories ',this.categoryIds);
    this.topicOne = [];
    this.topicTwo = [];
    this.topicThree = [];
    this.topicFour = [];
  }

  roundTwoPoints(dataSet) {
    const roundTwoSet = dataSet.map((currentClue) => {
      let doubleDataSet = {};
      doubleDataSet.question = currentClue.question;
      doubleDataSet.pointValue = currentClue.pointValue * 2;
      doubleDataSet.answer = currentClue.answer;
      doubleDataSet.categoryId = currentClue.categoryId;
      return doubleDataSet;
    });
    this.fetchClues(roundTwoSet)

  }

  uniquePoints(currentTopic) {
    const finalCat = new Set();
    const newClues = currentTopic.filter(clue => {
        if (finalCat.has(clue.pointValue)) {
            return false;
        }
        finalCat.add(clue.pointValue);
        return true;
    });
    console.log('unique Points ', newClues);
  }

  fetchClues(dataSet) {
    const categoryList = dataSet.filter((currentClue) => {
      return this.categoryIds.indexOf(currentClue.categoryId) !== -1 ;
    });

    categoryList.forEach((currentClue) => {
      if (currentClue.categoryId === this.categoryIds[0]) {
        this.topicOne.push(currentClue)
      } else if (currentClue.categoryId === this.categoryIds[1]) {
        this.topicTwo.push(currentClue)
      } else if (currentClue.categoryId === this.categoryIds[2]) {
        this.topicThree.push(currentClue)
      } else if (currentClue.categoryId === this.categoryIds[3]) {
        this.topicFour.push(currentClue)
      }
    });
    this.uniquePoints(this.topicOne);
    this.uniquePoints(this.topicTwo);
    this.uniquePoints(this.topicThree);
    this.uniquePoints(this.topicFour);
   }
}

export default Rounds;
