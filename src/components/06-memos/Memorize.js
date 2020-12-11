import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';
import '../02-useEffect/SimpleForm.css';

const Memorize = () => {

    const {counter, increase} = useCounter(10);
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={counter}/> </h2>
            <hr />

            <button className="btn btn-outline-primary" onClick={() => increase(1)}>
                +1
            </button>

            <button className="btn btn-outline-secondary" onClick={handleClick}>
                Mostrar/Ocultar {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize
