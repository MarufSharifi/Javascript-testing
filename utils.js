function getWinner(player1, player2) {
  const winnerNumber = Math.random();
  return winnerNumber < 1 / 3 ? player1 : winnerNumber < 2 / 3 ? player2 : null;
}

const utils = { getWinner };

export { utils };
