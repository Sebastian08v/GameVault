import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameListScreen from '../screens/GameListScreen';
import GameDetailScreen from '../screens/GameDetailScreen';

const Stack = createNativeStackNavigator ();

const StackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name= "GameList"
                component={GameListScreen}
                options={{title:'Catalogo'}}
            />

            <Stack.Screen
                name= "GameDetail"
                component={GameDetailScreen}
                options={{title: 'Detalle del juego'}}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;