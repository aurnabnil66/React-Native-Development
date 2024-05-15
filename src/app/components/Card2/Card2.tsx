import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../card/styles";

const card2 = () => {
    return(
        <View style = {{padding: 25, backgroundColor: "blue", marginTop: 20}}>
            <Text style = {{color: "white", textAlign: "center", padding: 15}}>This is a Text</Text>
            <TouchableOpacity style = {styles.buttonStyle}><Text style={styles.buttonText}>This is a button</Text></TouchableOpacity>
        </View>
    );
}

export default card2