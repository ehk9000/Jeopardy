import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Rounds from '../src/Rounds.js'
import Player from '../src/Player.js'
import spies from 'chai-spies'
chai.use(spies)
chai.spy.on(Game, ["checkAnswer"], () => true)

describe('Game', function() {
  var game;
  beforeEach(function() {
     game = new Game('Erik', 'Aidan', 'Sean');
    });
  it('should instanciate players on startup', function() {
    expect(game.p1).to.be.an.instanceOf(Player);
    expect(game.p2).to.be.an.instanceOf(Player);
    expect(game.p3).to.be.an.instanceOf(Player);
  });

  it('should take player names ', function() {
    expect(game.p1.playerName).to.equal('Erik');
    expect(game.p2.playerName).to.equal('Aidan');
    expect(game.p3.playerName).to.equal('Sean');
  });

  it('player dollar amount should be 0 by default', function() {
    expect(game.p1.playerDollarAmount).to.equal(0);
    expect(game.p2.playerDollarAmount).to.equal(0);
    expect(game.p3.playerDollarAmount).to.equal(0);
  });
  it('playerList should be an array of players', function() {
    expect(game.playerList).to.deep.equal([{"playerDollarAmount": 0, "playerId": 1, "playerName": "Erik"},{"playerDollarAmount": 0, "playerId": 2, "playerName": "Aidan"}, {"playerDollarAmount": 0, "playerId": 3, "playerName": "Sean"}, ]);
  })
  it('player List should have a length of 3', function() {
    expect(game.playerList).to.have.lengthOf(3);
  });

  it('should start with 16 clues remaining by default', function() {
    expect(game.cluesRemaining).to.equal(16);
  });
  it('player answer should be an empty string by default', function() {
    expect(game.playerAnswer).to.equal('');
  });
  it('round1 & round 2 categories should have a length of 4', function() {
    expect(game.round1Categories).to.have.lengthOf(4);
    expect(game.round2Categories).to.have.lengthOf(4);
  });
  it('round 1 and 2 should have differnt category ids ', function() {
    expect(game.round1Categories).to.not.equal(game.round2Categories);
  });

  it('Game.currentround should instanciate new round', function() {
    expect(game.currentRound).to.be.an.instanceOf(Rounds);
  });
  it('should update score ', function(){

    expect(Game.checkAnswer).to.have.been.called;
    const dollarBefore = game.p1.playerDollarAmount;
    const dollarAfter = game.p1.playerDollarAmount;
    const difference = dollarAfter + dollarBefore;
    expect(game.p1.playerDollarAmount).to.equal(difference)
  });

});

describe('Rounds', function() {
    it('Should have four empty topic arrays by default', function(){
      const round = new Rounds();
      expect(round.topicOne).to.deep.equal([]);
      expect(round.topicTwo).to.deep.equal([]);
      expect(round.topicThree).to.deep.equal([]);
      expect(round.topicFour).to.deep.equal([]);
    });
    it('Should pass in categories for round 1', function() {
      const game = new Game()
      const round = new Rounds(game.round1Categories)
      expect(round.categoryIds).to.deep.equal(game.round1Categories);

    });
    it('Should pass in categories for round 2', function() {
      const game = new Game()
      const round = new Rounds(game.round2Categories)
      expect(round.categoryIds).to.deep.equal(game.round2Categories);
    })
})
