import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/SimpleForm.css';

const MemoHook = () => {

    const {counter, increase} = useCounter(10);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />

            <p>
                {memoHeavyProcess}
            </p>

            <button className="btn btn-outline-primary" onClick={() => increase(1)}>
                +1
            </button>

            <button className="btn btn-outline-secondary" onClick={handleClick}>
                Mostrar/Ocultar {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default MemoHook