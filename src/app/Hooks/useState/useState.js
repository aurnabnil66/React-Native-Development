import React from "react";
import { useState } from "react";

function UseCounter(InitialValue){
    const[count, setCount] = useState(InitialValue);

    return {count, setCount};
} 

export default UseCounter;