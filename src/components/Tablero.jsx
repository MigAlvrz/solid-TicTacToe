import { For, createSignal } from "solid-js";
import Casilla from "./Casilla";
import './Tablero.css'

const [casillas, setCasillas] = createSignal(Array(9).fill(null));
const [isXTurn, setIsXTurn] = createSignal(false);
const [ganador, setGanador] = createSignal();
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
    if(!casillas()[id]) {
        casillas()[id] = isXTurn() ? "X" : "O"
        setIsXTurn(!isXTurn());
        console.log(casillas());
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
            false
        ) {}
    })
 }

 function Tablero() {
  


    return (
        <>
            <h1 class="test">Tres en raya</h1>
            <button onClick={nuevoJuego}>Nuevo juego</button>
            <div class="grid">
                { gameOn() &&
                    <For each={casillas()} >
                        {
                            (cas, i) => <Casilla jugarTurno={() => jugarTurno(i())} />
                        }
                    </For>
                }
            </div>
        </>
    );
}
    export default Tablero