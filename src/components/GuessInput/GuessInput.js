import React from 'react';

function GuessInput({ guesses, setGuesses, gameState, setGameState, answer }) {

  // const [guesses, setGuesses] = React.useState(['']);

  function handleSubmit(event) {

    event.preventDefault();
    console.log({ input });

    console.log(guesses.length)

    if (guesses.length < 5) {
      setGuesses([...guesses, input])

      if (input == answer) {
        setGameState('Won')
        console.log("Game Won!")
      }
      setInput('')
    } else if (guesses.length == 5) {
      setGuesses([...guesses, input])
      setGameState('Lost')
      console.log("Game LOST!")
      setInput('')
    }

  }

  const [input, setInput] = React.useState('');

  let isDisabled = false;

  // console.log(gameState == 'Won' || gameState =='Lost')

  if (gameState == 'Won' || gameState == 'Lost') {

    isDisabled = true

  }

  // if (gameState == "over")

  return <div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={isDisabled} required minLength={5} maxLength={5} pattern="[a-zA-Z]{5}"
        title="5 letter word" id="guess-input" type="text" value={input} onChange={(event) => {
          setInput(event.target.value.toUpperCase())
        }
        }
      />
    </form>
  </div>;
}

export default GuessInput;
