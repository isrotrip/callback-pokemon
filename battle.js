'use strict';

function battle(myPokemon, opponentPokemon, cb) {
  if (myPokemon.battlePoint >= opponentPokemon.battlePoint) {
    console.log(`You win!`);
    myPokemon.battlePoint -= opponentPokemon.battlePoint;
    cb(myPokemon);
  } else {
    console.log(`You lose!`);
    myPokemon.battlePoint = 0;
    cb(myPokemon);
  }
}

module.exports = battle;