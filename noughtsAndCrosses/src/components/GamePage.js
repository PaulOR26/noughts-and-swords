import React from 'react';
import Header from './Header';
import Gameboard from './Gameboard';
import TurnIndicator from './TurnIndicator';

const GamePage = () => {
  return (
    <div>
      <Header />
      <Gameboard />
      <TurnIndicator />
    </div>
  );
};

export default GamePage;
