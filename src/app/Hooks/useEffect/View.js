import React from "react";
import { View, Text, Button } from "react-native";
import Style from "./Style";
import UseCounter from "./useEffect";
import PerformOperation from "./Operations";

function ShowUseEffectView(){
    const counter = UseCounter(5);
    const operations = PerformOperation(counter);

    return(
        <View style={Style.Container}>
            <View style={Style.BoxStyle}>
                <Text style={Style.BoxText}>Count : {counter.count}</Text>
            </View>
            <Button title='Increment' onPress={operations.Increment}></Button>
            <Text style={Style.GapBetweenBtns}></Text>
            <Button title='Decrement' onPress={operations.Decrement}></Button>
        </View>
    );
}

export default ShowUseEffectView;