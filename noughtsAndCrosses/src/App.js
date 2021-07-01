import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import TurnIndicator from './components/TurnIndicator';
import PlayAgain from './components/PlayAgain';
import { useState } from 'react';

function App() {
  const [turn, setTurn] = useState('noughts');
  console.log(turn, 'app.js');

  return (
    <div className='App'>
      <Header />
      <Gameboard turn={turn} setTurn={setTurn} />
      <TurnIndicator />
      <PlayAgain />
    </div>
  );
}

export default App;
