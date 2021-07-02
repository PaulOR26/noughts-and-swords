function checkWin(playerBoard, player) {
  console.log(playerBoard, player, 'hello from checkWin');
  const winCombos = ['123', '147', '159', '258', '369', '357', '456', '789'];
  let hasWon = false;

  for (let i = 0; i < winCombos.length; i++) {
    hasWon = winCombos[i].split('').every((btnId) => {
      return playerBoard.includes(btnId);
    });
    if (hasWon) break;
  }

  if (hasWon) {
    alert(`${player} has won!`);
  }
}

export default checkWin;
