import { utils } from "./utils.js";

function thumbWar(player1, player2) {
  const numberToWin = 2;
  let player1Win = 0;
  let player2Win = 0;

  while (player1Win < numberToWin && player2Win < numberToWin) {
    const winner = utils.getWinner(player1, player2);
    if (winner === player1) {
      player1Win++;
    } else if (winner === player2) {
      player2Win++;
    }
  }
  return player1Win > player2Win ? player1 : player2;
}

export { thumbWar };
