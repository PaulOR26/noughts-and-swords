import React from 'react';

const TurnIndicator = ({ turnIndicator }) => {
  return (
    <div className='turn-section'>
      <p className='next-turn'>Next turn: </p>
      <p id='turnIndicator'>{turnIndicator}</p>
    </div>
  );
};

export default TurnIndicator;
