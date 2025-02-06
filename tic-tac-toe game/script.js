const buttons = document.querySelectorAll(".btn");
const container = document.querySelectorAll(".container");
const restartBtn = document.getElementById("restartBtn");
const winuser = document.getElementById("winuser");
const winners = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

restartBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.textContent = "";
    winuser.textContent = '';
    btn.removeAttribute("disabled");
  });
  turnO = true;
});

function checkWinner() {
  const board = [...buttons].map((btn) => btn.textContent);
  console.log(board);

  let winnerFound = false;

  for (let pattern of winners) {
    const [a, b, c] = pattern;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      console.log(`Winner: ${board[a]}`);
      winuser.textContent = `Winner : ${board[a]}`;
      winnerFound = true;
      buttons.forEach((btn) => {
        btn.setAttribute("disabled", true);
      });
      return;
    }
  }

  if (!winnerFound && board.every((cell) => cell !== "")) {
    console.log("Game Draw!");
    winuser.textContent = "Game Draw!";
  }
}

let turnO = true;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.textContent = "O";
      turnO = false;
    } else {
      btn.textContent = "X";
      turnO = true;
    }
    btn.setAttribute("disabled", true);
    checkWinner();
  });
});