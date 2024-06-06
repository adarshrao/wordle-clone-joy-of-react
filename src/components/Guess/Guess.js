import React from 'react';

import { range } from '../../utils';

import { checkGuess } from "../../../src/game-helpers"

function Guess({ guess, answer }) {

  if (guess === undefined) {
    console.log("Undefined")

    return <div>
    <p className="guess">
      {range(5).map((index) => {
        return <span key={crypto.randomUUID()} className="cell"></span>
      })}
    </p>
  </div>;

  } else {

    let outcome = checkGuess(guess, answer)

    return <div>
      <p className="guess">
        {range(5).map((index) => {

          let cellStyle = "cell" + " " + outcome[index].status

          return <span key={crypto.randomUUID()} className={cellStyle}>{outcome[index].letter}</span>
        })}
      </p>
    </div>;

  }

  // finalArray = checkGuess(guess,answer)


}

export default Guess;
