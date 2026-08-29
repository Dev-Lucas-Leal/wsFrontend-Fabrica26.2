import {useState, useEffect} from "react";

/**
 * @param {*} value
 * @param {number} delayInMs
 */

export function useDebouncedValue(value, delayInMs = 300){
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {

        setDebouncedValue(value);

        }, delayInMs);

    return () => clearTimeout(timeoutId);
    }, [value, delayInMs]);

     return debouncedValue;
}