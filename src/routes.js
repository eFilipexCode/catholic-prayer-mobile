import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Prays from './pages/Prays/Prays.js';
import NewPray from './pages/NewPray/NewPray.js';
import DetailPray from './pages/Pray/Pray.js';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Prays" component={Prays} />
                <Stack.Screen name="NewPray" component={NewPray}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;