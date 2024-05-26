import React from "react";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 100,
        justifyContent: 'center'
    },
    BoxStyle: {
        height: 40,
        width: 211,
        justifyContent: 'center',
        backgroundColor: '#1abc9c',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 22,
    },
    BoxText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#273746'
    },
    GapBetweenBtns: {
        marginBottom: 5
    },
});

export default Style;