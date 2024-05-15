import React from "react";
import { View, Text, StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    header:{
        marginVertical: 36
    },
    headerImg:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 36
    },
    title:{
        fontSize: 27,
        fontWeight: "700",
        color: "#1e1e1e",
        marginBottom: 6,
        textAlign: "center"
    },
    subtitle:{
        fontSize: 15,
        fontWeight: "700",
        color: "#929292",
        textAlign: "center"
    }
});

export default loginStyles;