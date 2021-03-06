// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/jeopardy-logo.png'
import Rounds from './Rounds.js';
import Game from './Game.js';
import Clue from './Clue.js'
import Player from './Player.js'
import dataSet from './dataSet.js';
import domUpdates from './domUpdates.js';


let dataCategories = Object.keys(dataSet.categories);

let categoriesToArray = $('.categories').toArray();
// Hard coded categories in
let categoryArr = [[dataCategories[1].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[2].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[4].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[6].toUpperCase()]];

const $name1 = $("#player-1").val();
const $name2 = $("#player-2").val();
const $name3 = $("#player-3").val();

const newGame = new Game($name1, $name2, $name3);

  $("#start-game").click(function() {
    event.preventDefault();
    domUpdates.publishCategories();
    domUpdates.publishRoundClues();
    domUpdates.publishScoreBoard();
    domUpdates.publishPlayerNames();
    $("#category-one").text(categoryArr[0]);
    $("#category-two").text(categoryArr[1]);
    $("#category-three").text(categoryArr[2]);
    $("#category-four").text(categoryArr[3]);
    domUpdates.removeMe();
  });

  $(document).on('click', '.clues', function (e) {
    newGame.cluesRemaining--;
    $(e.target).css('visibility', 'hidden');
    let category = [];
    if ($(e.target).is(".cat-1")) {
      category = (newGame.currentRound.topicOne);
      $(e.target).val()
  } else if ($(e.target).is(".cat-2")) {
    category = (newGame.currentRound.topicTwo);
  } else if ($(e.target).is(".cat-3")) {
    category = (newGame.currentRound.topicThree);
  } else {
    category = (newGame.currentRound.topicFour);
  }
    console.log(newGame.cluesRemaining);
    newGame.findClueIndex(category, e);
  });

  $(document).on('click', ".answer-btn", "#user-answer", function(event) {
    const $userAnswer = $("#user-answer").val();
    event.preventDefault();
    newGame.checkAnswer($userAnswer);
  });
