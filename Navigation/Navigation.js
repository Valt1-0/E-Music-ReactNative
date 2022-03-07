import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import ClassesInstruments from '../Vue/ClassesInstruments';
import TypesInstruments from '../Vue/TypesInstruments';
import Accueil from '../Vue/Accueil';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={Accueil}/>
            <Stack.Screen name="ClassesInstruments" component={ClassesInstruments}/>
            <Stack.Screen name="TypesInstruments" component={TypesInstruments}/>
        </Stack.Navigator>
    )
}

export default MyStack;