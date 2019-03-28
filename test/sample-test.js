import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Rounds from '../src/Rounds.js'

describe('Game', function() {
  it('should take player names ', function() {
    let game = new Game('Erik', 'Aidan', 'Sean');
    expect(game.p1.playerName).to.equal('Erik');
    expect(game.p2.playerName).to.equal('Aidan');
    expect(game.p3.playerName).to.equal('Sean');
  });
  it('player dollar amount should be 0 by default', function() {
    let game = new Game('Erik', 'Aidan', 'Sean');
    expect(game.p1.playerDollarAmount).to.equal(0);
    expect(game.p2.playerDollarAmount).to.equal(0);
    expect(game.p3.playerDollarAmount).to.equal(0);
  });
  it('player List should have a length of 3', function() {
    let game = new Game('Erik', 'Aidan', 'Sean');
    expect(game.playerList).to.have.lengthOf(3);
  });
  it('should find right index of topic array', function() {
    let game
  });
});
