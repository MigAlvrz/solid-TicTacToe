import { For, Show, createSignal } from "solid-js";
import Casilla from "./Casilla";
import './Tablero.css'

const [casillas, setCasillas] = createSignal(Array(9).fill(null));
const [isXTurn, setIsXTurn] = createSignal(false);
const [ganador, setGanador] = createSignal(null);
const [gameOn, setGameOn] = createSignal(true);

const resPosibles = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const jugarTurno = (id) => {
    if(!casillas()[id] && !ganador()) {
        casillas()[id] = isXTurn() ? "X" : "O"
        setIsXTurn(!isXTurn());
        calcGanador()
        return casillas()[id]
    }
    return casillas()[id]
  }

  function nuevoJuego() {
    setGameOn(false)
    setCasillas(Array(9).fill(null));
    setIsXTurn(true);
    setGanador(null)
    setGameOn(true)
  }



 function calcGanador()  {
    resPosibles.map((e) => {
        const [a, b, c] = e
        if (
            casillas()[a] && 
            casillas()[a] === casillas()[b] &&
            casillas()[a] === casillas()[c]
        ) {
            setGanador(value => casillas()[a])
        }
    })
 }

 function Tablero() {
  


    return (
        <>
            <h1 class="test">Tres en raya</h1>            
                <Show when={ganador()}>
                    <p>{ganador()} ha ganado la partida!</p>
                </Show>
                <Show when={!gameOn() || ganador()}>
                    <button class="button" onClick={nuevoJuego}>{ganador() ? "volver a jugar" : "nuevo juego"}</button>
                </Show>
            <div class="grid">
                <Show when={gameOn()}>
                    <For each={casillas()} >
                        {
                            (cas, i) => <Casilla jugarTurno={() => jugarTurno(i())} />
                        }
                    </For>
                </Show>
            </div>
        </>
    );
}
    export default Tablero