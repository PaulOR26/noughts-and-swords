import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';

import PlayAgain from './components/PlayAgain';
import { useState } from 'react';

function App() {
  const [turn, setTurn] = useState('noughts');
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

  return (
    <div className='App'>
      <Header />
      <Gameboard
        turn={turn}
        setTurn={setTurn}
        noughts={noughts}
        crosses={crosses}
        setNoughts={setNoughts}
        setCrosses={setCrosses}
        icon={icon}
        setIcon={setIcon}
      />
      <PlayAgain
        noughts={noughts}
        crosses={crosses}
        setNoughts={setNoughts}
        setCrosses={setCrosses}
        icon={icon}
        setIcon={setIcon}
      />
    </div>
  );
}

export default App;
