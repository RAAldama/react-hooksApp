import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    const increase = (factor = 1) => {
        setCounter(counter + factor);
    };

    const decrease = (factor = 1) => {
        setCounter(counter - factor);
    };

    const reset = () => {
        setCounter(initialState);
    };

    return {
        counter,
        increase,
        decrease,
        reset
    };
}
