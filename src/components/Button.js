import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export const Button = ({ name, w, onPressOut }) => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...{ width: w * 1 }, }} onPress={onPressOut}>
            <Text style={styles.text}>{name}</Text>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 50,
        backgroundColor: 'grey',
        opacity: 0.95,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 20

    },
    text: {
        textAlign: 'center',
        color: "white",
        fontSize: 20,

    }
})