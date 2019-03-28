import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Rounds from '../src/Rounds.js'

describe('Game', function() {
  var game;
  beforeEach(function() {
     game = new Game('Erik', 'Aidan', 'Sean');
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
  it('player List should have a length of 3', function() {
    expect(game.playerList).to.have.lengthOf(3);
  });

  it('should start with 16 clues remaining by default, then decrement on clue click', function() {
    expect(game.cluesRemaining).to.equal(16);
  });

});
