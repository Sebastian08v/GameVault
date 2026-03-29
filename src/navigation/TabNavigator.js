import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
 

import StackNavigator from './StackNavigator';
import AddGameScreen from '../screens/AddGameScreen';
import GamingNewsScreen from '../screens/GamingNewsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Catalogo"
                component={StackNavigator}
                options={{title: 'Catalogo',
                        tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="game-controller" color={color} size={size}/>)
                }}
            />

            <Tab.Screen
                name="Agregar"
                component={AddGameScreen}
            />

            <Tab.Screen
                name= "Noticias"
                component={GamingNewsScreen}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
