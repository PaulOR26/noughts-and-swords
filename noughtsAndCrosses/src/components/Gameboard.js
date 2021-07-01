import React from 'react';
import { useState } from 'react';

// function setGameboard(id, turn, cb) {
//   if (turn === 'noughts') {
//     setNoughts((currNoughts) => {
//       const newString = currNoughts;
//       return (newString += id);
//     });
//   }
// }

const Gameboard = ({ turn }) => {
  console.log(turn, 'gameboard');
  const [noughts, setNoughts] = useState('');
  const [crosses, setCrosses] = useState('');

  function buttonClick(id, turn) {
    // console.log(turn, 'onclick');
    if (turn === 'noughts') {
      setNoughts((currNoughts) => {
        let newString = currNoughts;
        // console.log((newString, id));
        return (newString += id);
      });
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          buttonClick('1', turn);
        }}
        id='1'
        className='gameBoard'
      ></button>
      {/* <button
        onClick={() => {
          setGameboard('2', turn);
        }}
        id='2'
        className='gameBoard'
      ></button>
      <button
        onClick={() => {
          setGameboard('3', turn);
        }}
        id='3'
        className='gameBoard'
      ></button>
      <br></br>
      <button
        onClick={() => {
          setGameboard('4', turn);
        }}
        id='4'
        className='gameBoard'
      ></button>
      <button
        onClick={() => {
          setGameboard('5', turn);
        }}
        id='5'
        className='gameBoard'
      ></button>
      <button
        onClick={() => {
          setGameboard('6', turn);
        }}
        id='6'
        className='gameBoard'
      ></button>
      <br></br>
      <button
        onClick={() => {
          setGameboard('7', turn);
        }}
        id='7'
        className='gameBoard'
      ></button>
      <button
        onClick={() => {
          setGameboard('8', turn);
        }}
        id='8'
        className='gameBoard'
      ></button>
      <button
        onClick={() => {
          setGameboard('9', turn);
        }}
        id='9'
        className='gameBoard'
      ></button> */}
    </div>
  );
};

export default Gameboard;
