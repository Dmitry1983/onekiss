import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { Button } from '../components/Button'
import { CheckBox } from '../components/CheckBox'

export const CardCont = ({ title, onPressOut }) => {
    const { container, header, text } = styles
    const context = (
        <View style={{ ...container, height: '25%' }}>
            <View style={header}>
                <Text style={text}>{title}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Button name="CONTINUE" w='150' onPressOut={onPressOut} />
            </View>
        </View>
    )
    return (
        context
    )
}

export const CardYN = ({ title, onPressOut }) => {
    const { container, buttons, header, text } = styles
    const context = (
        <View style={{ ...container, height: '30%' }}>
            <View style={header}>
                <Text style={text}>{title}</Text>
            </View>
            <View style={buttons}>
                <Button name="No" w='80' onPressOut={onPressOut} />
                <Button name="Yes" w='80' onPressOut={onPressOut} />
            </View>
        </View>
    )
    return (
        context
    )
}

export const Card3CB = ({ title, check1, check2, check3, onPressOut }) => {
    const { container, header, text } = styles
    const context = (
        <View style={{ ...container, height: '35%' }}>
            <View style={header}>
                <Text style={text}>{title}</Text>
            </View>
            <View style={{ alignItems: 'flex-start', marginLeft: 40, marginBottom: 10 }}>
                <CheckBox title={check1} enable='false' onPressOut={onPressOut} />
                <CheckBox title={check2} enable='false' onPressOut={onPressOut} />
                <CheckBox title={check3} enable='false' onPressOut={onPressOut} />
            </View>
        </View>
    )
    return (
        context
    )
}


const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#fbecd9',
        opacity: 1,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 30,

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        margin: 20,
        height: 50,
        //width: '80%'

    },
    header: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        margin: 20,
        color: "black",
        fontSize: 26,
    },

})