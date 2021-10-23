import {useEffect, useState} from "react";
import {useCounter} from "./useCounter";

export default function useTypingEffect(strings: string[], speed: number = 30, loop:boolean = false, startAfter: number = 0, wait: number = 1000): [string, () => void, boolean, any] {
    const [str, setStr] = useState("");
    const {count: i, increment, setCount} = useCounter(0, strings.length);
    const [finished, setFinished] = useState(false);
   
    function restart(): void {
        setCount(0);
        setFinished(false);
        setStr("");

    }

    useEffect(() => {
        if (!finished)
        setTimeout(() => {
            if (i >= strings.length || str.length >= strings[i].length) {
                if (i < strings.length - 1 || loop) 
                    setTimeout(() => {
                        increment();
                        setStr("");
                    }, wait)
                else
                    setFinished(true)
            } else {
                // if (i >= strings.length - 1 && str.length >= strings[i].length - 1 && !loop)
                //     setFinished(true);
                setStr(prev => prev + strings[i][prev.length]);
            }
        }, ((i === 0 && str.length === 0)? startAfter : speed))
    // eslint-disable-next-line
    }, [str])
    return [str, restart, finished, setFinished];
}