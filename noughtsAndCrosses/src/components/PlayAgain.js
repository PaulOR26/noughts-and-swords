import React from 'react';

const PlayAgain = ({ setNoughts, setHasWon, setCrosses, setIcon }) => {
  function resetBoard() {
    setCrosses(() => {
      return '';
    });
    setNoughts(() => {
      return '';
    });
    setIcon(() => {
      return { 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
    });
    setHasWon(() => {
      return '';
    });
  }
  return (
    <button
      id='playAgainButton'
      onClick={() => {
        resetBoard();
      }}
    >
      Play Again!
    </button>
  );
};

export default PlayAgain;
