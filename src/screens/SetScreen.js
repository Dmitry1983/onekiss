import React from "react";
import { Base } from '../base'
import { SetStart, SetCheckbox, SetСhoice, SetEnding } from '../components/TypeScreens'

export const setScreen01 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen02') }
    const base = Base.set01
    return (
        <SetStart page={base} onPressPolicy={goToPP} onPressOut={goTo} />
    )
}

export const setScreen02 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen03') }
    const base = Base.set02
    return (
        <SetСhoice page={base} onPressPolicy={goToPP} onPressOut={goTo} />
    )
}

export const setScreen03 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen04') }
    const base = Base.set03
    return (
        <SetCheckbox page={base} onPressPolicy={goToPP} onPressOut={goTo} />
    )
}
export const setScreen04 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen05') }
    const base = Base.set04
    return (
        <SetСhoice page={base} onPressPolicy={goToPP} onPressOut={goTo} />
    )
}

export const setScreen05 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen06') }
    const base = Base.set05
    return (
        <SetCheckbox page={base} onPressPolicy={goToPP} onPressOut={goTo}
        />
    )
}

export const setScreen06 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen07') }
    const base = Base.set06
    return (
        <SetСhoice page={base} onPressPolicy={goToPP} onPressOut={goTo}
        />
    )
}

export const setScreen07 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen08') }
    const base = Base.set07
    return (
        <SetСhoice page={base} onPressPolicy={goToPP} onPressOut={goTo}
        />
    )
}

export const setScreen08 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen09') }
    const base = Base.set08
    return (
        <SetСhoice page={base} onPressPolicy={goToPP} onPressOut={goTo}
        />
    )
}

export const setScreen09 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen10') }
    const base = Base.set09
    return (
        <SetCheckbox page={base} onPressPolicy={goToPP} onPressOut={goTo}
        />
    )
}

export const setScreen10 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreen11') }
    const base = Base.set10
    return (
        <SetCheckbox page={base} onPressPolicy={goToPP} onPressOut={goTo}
        />
    )
}

export const setScreen11 = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const goTo = () => { navigation.navigate('setScreenEnd') }
    const base = Base.set11
    return (
        <SetСhoice page={base} onPressPolicy={goToPP} onPressOut={goTo}
        />
    )
}



export const setScreenEnd = ({ navigation }) => {
    const goToPP = () => { navigation.navigate('policyScreen') }
    const base = Base.set12
    return (
        <SetEnding page={base} onPressPolicy={goToPP} />
    )
}
