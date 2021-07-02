import React from 'react';

const PlayAgain = ({
  noughts,
  setNoughts,
  crosses,
  setCrosses,
  icon,
  setIcon
}) => {
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
  }
  return (
    <button
      onClick={() => {
        resetBoard();
      }}
    >
      Play Again!
    </button>
  );
};

export default PlayAgain;
