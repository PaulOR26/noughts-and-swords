function checkWin(playerBoard, id) {
  playerBoard += id;
  console.log(playerBoard, 'hello from checkWin');
  const winCombos = ['123', '147', '159', '258', '369', '357', '456', '789'];
  let hasWon = false;

  for (let i = 0; i < winCombos.length; i++) {
    hasWon = winCombos[i].split('').every((btnId) => {
      return playerBoard.includes(btnId);
    });
    if (hasWon) break;
  }
  return hasWon;
}

export default checkWin;
