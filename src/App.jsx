import { useState } from "react";
import Cell from "./components/Cell";
import ResetButton from "./components/ResetButton";
import { XMarkIcon } from "@heroicons/react/24/solid";

const WINNIG_POSITIONS = [
  // ROWS
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // COLUMNS
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // DIAGONALS
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null)

  function handleClick(index) {
    if (board[index] !== null) return;
    if (winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    setBoard(newBoard);
    const detectedWinner = checkWinner(newBoard);
    if (detectedWinner) {
      setWinner(detectedWinner.player);
      setWinningLine(detectedWinner.combo)
    }
  }

  function checkWinner(board) {
    console.log("inside the function");
    for (let combo of WINNIG_POSITIONS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return {combo, player: board[a]};
      }
    }
    return null;
  }

  function amIWinner(index) {
    return winningLine && winningLine.includes(index)
  }

  function resetBoard() {
    setWinner(null)
    setWinningLine(null)
    setCurrentPlayer('X')
    setBoard(Array(9).fill(null))
  }



  return (
    <div className="min-h-screen py-12 flex flex-col gap-12 items-center bg-linear-to-r from-background/97 to-background/99">
      <h1 className="tracking-wider text-3xl font-bold text-foreground">
        Tic Tac Toe <span className="text-cyan-300">React</span>
      </h1>
      {winner ? (
        <p className="text-slate-50 font-semibold tracking-wider">
          The winner is:{" "}
          <span className="text-xl font-bold text-cyan-300">{winner}</span>
        </p>
      ) : (
        <p className="text-slate-50 font-semibold tracking-wider">
          Next Player:{" "}
          <span className="text-xl font-bold text-cyan-300">
            {currentPlayer}
          </span>
        </p>
      )}

      <div className="grid grid-cols-3 gap-1 w-full max-w-3xl px-4">
        {board.map((value, index) => (
          <Cell key={index} amIWinner={amIWinner(index)} isWinner={winningLine} onClick={() => handleClick(index)}>
            {value === "X" && <p className="text-teal-300 font-black text-[clamp(5rem,10vw,10rem)]">X</p>}
            {value === "O" && <p className="text-amber-300 font-black text-[clamp(5rem,10vw,10rem)]">O</p>}
          </Cell>
        ))}
      </div>

      <ResetButton onClick={resetBoard}/>
    </div>
  );
}

export default App;
