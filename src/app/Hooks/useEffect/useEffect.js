import React, { useEffect } from "react";
import { useState } from "react";

function UseCounter(InitialValue){
    const[count, setCount] = useState(InitialValue);

    useEffect(() => {
        // Runs on the fist render
        // Any time any dependency value changes
        // Effect to perform some action whenever count changes
    }, [count]);

    // useEffect(() => {
    //     // Runs every render
    // }, {});

    // useEffect(() => {
    //     // Runs only on the fist render
    // }, []);

    return {count, setCount};
} 

export default UseCounter;