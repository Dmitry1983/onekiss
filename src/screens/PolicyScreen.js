import React from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    SafeAreaView,

} from 'react-native'
import { PolicyText } from '../base'
import { TouchableOpacity } from "react-native-gesture-handler";

export const policyScreen = ({ navigation }) => {
    const goToBack = () => {
        //navigation.navigate('1')
        navigation.goBack()
    }
    return (
        <SafeAreaView >
            <ScrollView >
                <View style={styles.view}>
                    {/* <Text style={styles.text}> */}
                    <PolicyText />
                    {/* </Text> */}
                </View>


                <View style={{ marginTop: 20 }}>
                    {/* <Button
                        title="< Back"
                        onPress={goToBack}
                    /> */}
                    <TouchableOpacity onPress={goToBack}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'grey',
        paddingBottom: 20,
    },
    view: {
        margin: 20,
        //backgroundColor:'#fbecd9',


    }
})