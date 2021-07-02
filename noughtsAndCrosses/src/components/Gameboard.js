import React from 'react';
import { useState } from 'react';
import TurnIndicator from './TurnIndicator';
import WinInstance from './WinInstance';
import checkWin from '../utils/win';

const Gameboard = ({
  turn,
  setTurn,
  noughts,
  setNoughts,
  crosses,
  setCrosses,
  icon,
  setIcon,
  hasWon,
  setHasWon
}) => {
  const [turnIndicator, setTurnIndicator] = useState('⭕');

  function updatePlayerString(id, turn) {
    if (!noughts.includes(id) && !crosses.includes(id)) {
      if (turn === 'noughts') {
        if (checkWin(noughts, id)) {
          setHasWon(() => {
            return `Noughts has won!`;
          });
        }
        setIcon((currIcon) => {
          const newIcons = { ...currIcon };
          newIcons[id] = '⭕';
          return newIcons;
        });
        setNoughts((currNoughts) => {
          let newString = currNoughts;
          return (newString += id);
        });
      } else if (turn === 'crosses') {
        if (checkWin(crosses, id)) {
          setHasWon(() => {
            return `Swords has won!`;
          });
        }
        setIcon((currIcon) => {
          const newIcons = { ...currIcon };
          newIcons[id] = '⚔️';
          return newIcons;
        });
        setCrosses((currCrosses) => {
          let newString = currCrosses;
          return (newString += id);
        });
      }

      setTurn((currTurn) => {
        return currTurn === 'noughts' ? 'crosses' : 'noughts';
      });
      setTurnIndicator(() => {
        return turn === 'noughts' ? '⚔️' : '⭕';
      });
    }
  }

  return (
    <div className='gameGrid'>
      <button
        onClick={() => {
          updatePlayerString('1', turn);
        }}
        id='1'
        className='gameBoard'
      >
        {icon['1']}
      </button>
      <button
        onClick={() => {
          updatePlayerString('2', turn);
        }}
        id='2'
        className='gameBoard'
      >
        {icon['2']}
      </button>
      <button
        onClick={() => {
          updatePlayerString('3', turn);
        }}
        id='3'
        className='gameBoard'
      >
        {icon['3']}
      </button>

      <button
        onClick={() => {
          updatePlayerString('4', turn);
        }}
        id='4'
        className='gameBoard'
      >
        {icon['4']}
      </button>
      <button
        onClick={() => {
          updatePlayerString('5', turn);
        }}
        id='5'
        className='gameBoard'
      >
        {icon['5']}
      </button>
      <button
        onClick={() => {
          updatePlayerString('6', turn);
        }}
        id='6'
        className='gameBoard'
      >
        {icon['6']}
      </button>

      <button
        onClick={() => {
          updatePlayerString('7', turn);
        }}
        id='7'
        className='gameBoard'
      >
        {icon['7']}
      </button>
      <button
        onClick={() => {
          updatePlayerString('8', turn);
        }}
        id='8'
        className='gameBoard'
      >
        {icon['8']}
      </button>
      <button
        onClick={() => {
          updatePlayerString('9', turn);
        }}
        id='9'
        className='gameBoard'
      >
        {icon['9']}
      </button>
      <WinInstance hasWon={hasWon} />

      <TurnIndicator turn={turn} turnIndicator={turnIndicator} />
    </div>
  );
};

export default Gameboard;
