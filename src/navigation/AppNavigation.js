import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StartScreen } from '../screens/StartScreen'
import { ViewScreen } from '../screens/ViewScreen'
import {
    setScreen01,
    setScreen02,
    setScreen03,
    setScreen04,
    setScreen05,
    setScreen06,
    setScreen07,
    setScreen08,
    setScreen09,
    setScreen10,
    setScreen11,
    setScreen12,
    setScreen13,
    setScreen14,
    setScreen15,
    setScreen16,
    setScreenEnd
} from '../screens/SetScreen'
import { policyScreen } from '../screens/PolicyScreen'


const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="startScreen"
            headerMode="none"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: 'grey',
                },
            }}
        >
            <Stack.Screen
                name="startScreen"
                component={StartScreen}
            />
            <Stack.Screen
                name="viewScreen"
                component={ViewScreen}
            />
            <Stack.Screen
                name="policyScreen"
                component={policyScreen}
            />

            <Stack.Screen
                name="setScreen01"
                component={setScreen01}
            />
            <Stack.Screen
                name="setScreen02"
                component={setScreen02}
            />
            <Stack.Screen
                name="setScreen03"
                component={setScreen03}
            />
            <Stack.Screen
                name="setScreen04"
                component={setScreen04}
            />
            <Stack.Screen
                name="setScreen05"
                component={setScreen05}
            />
            <Stack.Screen
                name="setScreen06"
                component={setScreen06}
            />
            <Stack.Screen
                name="setScreen07"
                component={setScreen07}
            />
            <Stack.Screen
                name="setScreen08"
                component={setScreen08}
            />
            <Stack.Screen
                name="setScreen09"
                component={setScreen09}
            />
            <Stack.Screen
                name="setScreen10"
                component={setScreen10}
            />
            <Stack.Screen
                name="setScreen11"
                component={setScreen11}
            />

            <Stack.Screen
                name="setScreen12"
                component={setScreen12}
            />
            <Stack.Screen
                name="setScreen13"
                component={setScreen13}
            />
            <Stack.Screen
                name="setScreen14"
                component={setScreen14}
            />
            <Stack.Screen
                name="setScreen15"
                component={setScreen15}
            />
            <Stack.Screen
                name="setScreen16"
                component={setScreen16}
            />

            <Stack.Screen
                name="setScreenEnd"
                component={setScreenEnd}
            />

        </Stack.Navigator>
    )
}

export function AppNavigation() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}