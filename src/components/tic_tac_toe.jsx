import React, { useState } from "react";
import "./tic_tac_toe.css";
import useTicTacToe from "./hook/use_tic_tac_toe";

const Tic_tac_toe = () => {
  const {
    isDisable,
    tabla,
    CalcularGanador,
    Reset,
    HandleOnclick,
    letter,
    ganador,
    ReiniciarJuego,
  } = useTicTacToe();
  console.log(tabla);
  const win = CalcularGanador(tabla);

  if (win) {
    console.log("Ganador!!!", win);

    Reset(win);
  } else {
    console.log("sigue intentando");
  }

  return (
    <>
      <div
        className="container"
        style={{
          display: `${ganador ? "none" : ""}`,
        }}
      >
        <h1>Turno {letter ? "X" : "O"} </h1>
        <div className="board">
          {tabla.map((b, index) => (
            <button
              key={index}
              className="caja"
              onClick={() => HandleOnclick(index)}
              disabled={isDisable(index)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
      <div
        className="container_message"
        style={{ display: `${!ganador ? "none" : ""}` }}
      >
        <div className="align-text">
          <h1 className="titulo-ganador">GANADOR:</h1>
          <h2 className="titulo-ganador"> {ganador} </h2>
        </div>
        <div className="img-container">
          <img src="./src/image/ganador.jpg" alt="" className="ganador" />
        </div>
        <button onClick={() => ReiniciarJuego()}>JUGAR DE NUEVO</button>
      </div>
      <div
        className="container_message"
        style={{
          display: `${tabla.every((item) => item !== null) ? "" : "none"}`,
        }}
      >
        <div className="align-text">
          <h1 className="titulo-empate">ES UN EMPATE!!!!</h1>
          <button onClick={() => ReiniciarJuego()} className="boton-empate">
            JUGAR DE NUEVO
          </button>
        </div>
      </div>
    </>
  );
};

export default Tic_tac_toe;
