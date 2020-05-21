import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native'

export const Indicator = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size='large' color="white" />
            {/* <View><Text>data: {JSON.stringify(data)}</Text></View> */}

            {/* <Button title="storeData" onPress={storeData} />
            <View><Text>data: {storageKey}</Text></View>
            <Button title="ReadData" onPress={getData} />
            <Button title="ClearData" onPress={removeValue} /> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignContent: 'center'

    },
})