import React from "react";
import UseCounter from "./useState";

function PerformOperation(CountObject){
    function Increment(){
        CountObject.setCount(CountObject.count + 1);
    }

    function Decrement(){
        CountObject.setCount(CountObject.count - 1);
    }

    return {Increment, Decrement};
}

export default PerformOperation;