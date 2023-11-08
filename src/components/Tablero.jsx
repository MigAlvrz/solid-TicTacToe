import { For, createSignal } from "solid-js";
import Casilla from "./Casilla";
import './Tablero.css'

const [casillas, selectCasillas] = createSignal([]);
const [isXTurn, setIsXTurn] = createSignal(false);
const [resultado, setResultado] = createSignal();

const resultadosPosibles = [
    { 1: 1, 2: 2, 3: 3 },
    { 1: 4, 2: 5, 3: 6 },
    { 1: 7, 2: 8, 3: 9 },
    { 1: 1, 2: 4, 3: 7 },
    { 1: 2, 2: 5, 3: 8 },
    { 1: 3, 2: 6, 3: 9 },
    { 1: 1, 2: 5, 3: 9 },
    { 1: 3, 2: 5, 3: 7 },
];

 function Tablero() {

    return (
        <>
            <h1 class="test">Tres en raya</h1>
            <button>Nuevo juego</button>
            <div class="grid">
                <For each={[0,1,2,3,4,5,6,7,8]}>
                    {(id) => <Casilla id={id} />}
                </For>
            </div>
        </>
    );
}
    export default Tablero