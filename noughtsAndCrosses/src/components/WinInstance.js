import React from 'react';

// const [hasWon, setHasWon] = useState("");

const WinInstance = ({ hasWon }) => {
  return <p id='winMessage'>{hasWon}</p>;
};

export default WinInstance;
