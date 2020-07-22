import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/Home'

const StackNavigation = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name='Home' component={Home}/>
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}