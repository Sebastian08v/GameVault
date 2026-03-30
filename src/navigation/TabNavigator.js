import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import StackNavigator from './StackNavigator';
import AddGameScreen from '../screens/AddGameScreen';
import GamingNewsScreen from '../screens/GamingNewsScreen';

// Create tab navigator instance
const Tab = createBottomTabNavigator();

// Main tab navigation component
const TabNavigator = () =>{
    return(
        <Tab.Navigator
            screenOptions={{
                // Active tab color
                tabBarActiveTintColor: '#673AB7',

                // Inactive tab color
                tabBarInactiveTintColor: 'gray',
            }}
        >  

            {/* Catalog tab (uses stack navigation) */}
            <Tab.Screen
                name="Catalogo"
                component={StackNavigator}
                options={{title: 'Catalogo',
                        tabBarIcon: ({ color, size }) => (
                            <SimpleLineIcons
                                name="game-controller"
                                size={size}
                                color={color}
                            />)
                }}
            />

            {/* Add game tab */}
            <Tab.Screen
                name="Agregar"
                component={AddGameScreen}
                options={{title: 'Agregar',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="gamepad-round-outline"
                                size={size}
                                color={color}
                            />)
                }}
            />

            {/* Gaming news tab */}
            <Tab.Screen
                name= "Noticias"
                component={GamingNewsScreen}
                options={{title: 'Noticias',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="newspaper-variant-outline"
                                size={size}
                                color={color}
                            />)
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
