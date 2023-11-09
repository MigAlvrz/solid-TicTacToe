import { createSignal } from 'solid-js';
import './Casilla.css'

 function Casilla({id, jugarTurno}) {
    const [val, setVal] = createSignal();

    const jugar = () => {
        setVal(jugarTurno(id))
    }

    return (
        <>
            <div class={`casilla ${val()}`} onClick={jugar}>{val()}</div>
        </>
    );
}
    export default Casilla;