import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';

import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  let [guesses, setGuesses] = React.useState([]);

  let [gameState, setGameState] = React.useState('running');

  return <>

    <div className="guess-results">
      {range(6).map((index) => {
        return <Guess key={crypto.randomUUID()} guess={guesses[index]} answer={answer} />
      })}
    </div>

    <GuessInput guesses={guesses} setGuesses={setGuesses} gameState={gameState} setGameState={setGameState} answer={answer} />

    {gameState == "Won" && (<div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>)}

    {gameState == "Lost" && (<div class="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>)}

  </>;

}

export default Game;
