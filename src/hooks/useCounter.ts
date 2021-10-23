import React, {useState} from "react";

export interface CounterHookReturnValues {
    count: number;
    change: (amount: number) => void;
    setCount: React.Dispatch<React.SetStateAction<number>>,
    increment: () => void;
    decrement: () => void;
}

export  function useCounter(intial: number = 0, max?: number, min?: number): CounterHookReturnValues {
    const [count, setCount] = useState(intial);

    function change(amount: number) {
        setCount(prevCount => prevCount + amount);
    }

    function increment() {
        if (max !== null && (count === max))
            setCount(min ?? 0);
        else change(1);

    }
    function decrement() {

        if (min !== null && (count === min)) 
            setCount(max ?? 0);
        else change(-1);
    }

    return {
        count,
        change,
        increment,
        decrement,
        setCount
    }
}