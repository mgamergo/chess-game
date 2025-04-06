export function getPawnMoves(board, i, j) {
  moves = [];
  if (
    (board[i][j] == board[i][j].toLowerCase() && i >= 7) ||
    (board[i][j] == board[i][j].toUpperCase() && i <= 0)
  )
    return moves;

  if (board[i][j] == board[i][j].toUpperCase()) {
    if (!board[i - 1][j]) {
      moves.push([i - 1, j]);
      if (i === 6 && !board[i - 2][j]) {
        moves.push([i - 2, j]);
      }
    }
    if (j + 1 <= 7 && board[i - 1][j + 1]) {
      moves.push([i + 1, j + 1]);
    }
    if (j - 1 >= 0 && board[i - 1][j - 1]) {
      moves.push([i + 1, j - 1]);
    }
  } else {
    if (!board[i + 1][j]) {
      moves.push([i + 1, j]);
      if (i === 1 && !board[i + 2][j]) {
        moves.push([i + 2, j]);
      }
    }
    if (j + 1 <= 7 && board[i + 1][j + 1]) {
      moves.push([i + 1, j + 1]);
    }
    if (j - 1 >= 0 && board[i + 1][j - 1]) {
      moves.push([i + 1, j - 1]);
    }
  }
}

export function getKnightMoves(board, i, j) {
  let color = board[i][j] === board[i][j].toUpperCase() ? "white" : "black";
  const moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];
  moves.filter(([nx, ny]) => {
    if (nx < 0 || nx > 7 || ny < 0 || ny > 7) return false;
    const target = board[nx][ny];
    if (!target) return true;
    return color === "white"
      ? target === target.toLowerCase()
      : target === target.toUpperCase();
  });
}
