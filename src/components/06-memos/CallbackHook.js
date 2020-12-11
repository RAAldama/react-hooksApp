import React, { useCallback, useEffect, useState } from 'react';
import ShowIncrement from './ShowIncrement';
import '../02-useEffect/SimpleForm.css';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = useCallback( (value) => {
        setCounter(c => c + value);
    }, [setCounter]);

    useEffect(() => {
        //COSAS
    }, [increment])

    return (
        <div>
            <h1>CallBack</h1>
            <h2>Counter: {counter}</h2>
            <hr />

            <ShowIncrement increment={increment}/>
        </div>
    )
}

export default CallbackHook
