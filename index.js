'use strict';

const battle = require('./battle');

class Pokemon {
  constructor(battlePoint) {
    this._battlePoint = battlePoint;
  }

  get battlePoint() {
    return this._battlePoint;
  }

  set battlePoint(battlePoint) {
    this._battlePoint = battlePoint;
  }
}

// Pokemon kita
const pikachu = new Pokemon(25);

// Gym Leader
const firePokemon = new Pokemon(1);
const waterPokemon = new Pokemon(14);
const earthPokemon = new Pokemon(8);

// call back hell
// battle(pikachu, firePokemon, function (pikachuAfterFire) {
//   if (pikachuAfterFire.battlePoint === 0) {
//     console.log(`Your pokemon is tired`);
//     return
//   }

//   battle(pikachuAfterFire, waterPokemon, function (pikachuAfterWater) {
//     if (pikachuAfterFire.battlePoint === 0) {
//       console.log(`Your pokemon is tired`);
//       return
//     }

//     battle(pikachuAfterWater, earthPokemon, function (pikachuAfterEarth) {
//       console.log(pikachuAfterEarth);
//     });
//   });
// });

// with modular function and callback
function showLastCondition(myPokemon) {
  console.log('Battle Ends');
  console.log(myPokemon);
}

function myPokemonVSEarth(myPokemon) {
  if (myPokemon.battlePoint === 0) {
    console.log(`Your pokemon is tired`);
    return
  }
  battle(myPokemon, earthPokemon, showLastCondition);
}

function myPokemonVSWater(myPokemon) {
  if (myPokemon.battlePoint === 0) {
    console.log(`Your pokemon is tired`);
    return
  }

  // method selanjutnya
  battle(myPokemon, waterPokemon, myPokemonVSEarth);
}

function myPokemonVSFire(myPokemon) {
  battle(myPokemon, firePokemon, myPokemonVSWater);
}

myPokemonVSFire(pikachu);