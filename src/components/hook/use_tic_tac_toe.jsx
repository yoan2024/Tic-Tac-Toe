import { use, useState } from "react";

function array() {
  return Array(9).fill(null);
}

const useTicTacToe = () => {
  const [tabla, setTabla] = useState(array());
  const [letter, setLetter] = useState(true);
  const [ganador, setGanador] = useState(null);

  const PATTER_WINNER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  function CalcularGanador(currentTable) {
    let win;
    for (let i = 0; i < PATTER_WINNER.length; i++) {
      const [a, b, c] = PATTER_WINNER[i];
      if (
        currentTable[a] &&
        currentTable[a] === currentTable[b] &&
        currentTable[b] === currentTable[c]
      ) {
        win = currentTable[b];

        break;
      }
    }
    return win;
  }

  function HandleOnclick(index) {
    if (ganador) return;
    isDisable(index);
    const newTable = [...tabla];
    newTable[index] = letter ? "X" : "O";
    setTabla(newTable);
    setLetter(!letter);

    const hayGanador = CalcularGanador(newTable);
    if (hayGanador) {
      setGanador(hayGanador);
    }
  }

  function Reset() {
    setTabla(Array(9).fill(null));
  }

  function isDisable(index) {
    const currentTabla = [...tabla];
    if (currentTabla[index]) {
      return true;
    } else {
      return false;
    }
  }

  function ReiniciarJuego() {
    setGanador(null);
    setTabla(Array(9).fill(null));
  }

  return {
    isDisable,
    tabla,
    CalcularGanador,
    HandleOnclick,
    Reset,
    letter,
    ganador,
    ReiniciarJuego,
  };
};

export default useTicTacToe;
