import React from 'react';
import { useState } from 'react';

const Gameboard = ({ turn }) => {
  const [noughts, setNoughts] = useState('');
  const [crosses, setCrosses] = useState('');
  const [icon, setIcon] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  });

  function updatePlayerString(id, turn) {
    if (!noughts.includes(id) && !crosses.includes(id)) {
      if (turn === 'noughts') {
        // change icon to nought
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
        // change icon to swords
        setIcon((currIcon) => {
          return '⚔️';
        });
        setCrosses((currCrosses) => {
          let newString = currCrosses;
          return (newString += currCrosses);
        });
      }
    }
  }

  return (
    <div>
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
      <br></br>
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
      <br></br>
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
    </div>
  );
};

export default Gameboard;
