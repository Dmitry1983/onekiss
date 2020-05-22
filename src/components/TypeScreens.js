import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import { Card3CB, CardCont, CardYN } from './Cards'

const Policy = ({ onPressPolicy }) => {
    const { policy } = styles
    return (
        <TouchableOpacity
            onPress={onPressPolicy}>
            <Text style={policy}>Privacy Policy</Text>
        </TouchableOpacity>
    )
}

export const SetStart = ({ page, onPressPolicy, onPressOut }) => {
    const { view, container, image } = styles
    return (
        <View style={container}>
            <ImageBackground source={page.uri} style={image}>
                <View style={view}>
                    <Policy
                        onPressPolicy={onPressPolicy}
                    />
                    <CardCont title={page.title} onPressOut={onPressOut} />
                </View>
            </ImageBackground>
        </View >
    )
}

export const SetСhoice = ({ page, onPressPolicy, onPressOut }) => {
    const { view, container, image } = styles
    return (
        <View style={container}>
            <ImageBackground source={page.uri} style={image}>
                <View style={view}>
                    <Policy
                        onPressPolicy={onPressPolicy}
                    />
                    <CardYN title={page.title} onPressOut={onPressOut} />
                </View>
            </ImageBackground>
        </View>
    )
}

export const SetCheckbox = ({ page, onPressPolicy, onPressOut }) => {
    const { view, container, image } = styles
    return (
        <View style={container}>
            <ImageBackground source={page.uri} style={image}>
                <View style={view}>
                    <Policy
                        onPressPolicy={onPressPolicy}
                    />
                    <Card3CB title={page.title} onPressOut={onPressOut} check1="Yes" check2="Sometime" check3="No" />
                </View>
            </ImageBackground>
        </View>
    )
}

export const SetEnding = ({ page, onPressPolicy }) => {
    const { view, viewEnd, textEnd, container, image } = styles
    return (
        <View style={container}>
            <ImageBackground source={page.uri} style={image}>
                <View style={view}>
                    <Policy
                        onPressPolicy={onPressPolicy}
                    />
                    <View style={viewEnd}>
                        <Text style={textEnd}>{page.title}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        height: '100%'
    },
    policy: {
        marginBottom: 30,
        marginTop: 60,
        textAlign: 'center',
        color: '#fbecd9',
        fontSize: 18
    },
    view: {
        flex: 1,
        flexDirection: 'column-reverse'
    },
    textEnd: {
        fontSize: 24,
        margin: 25,
        textAlign: 'center'
    },
    viewEnd: {
        width: '80%',
        backgroundColor: '#fbecd9',
        opacity: 0.8,
        borderRadius: 20
    }
})