import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameListScreen from '../screens/GameListScreen';
import GameDetailScreen from '../screens/GameDetailScreen';

// Create stack navigator instance
const Stack = createNativeStackNavigator ();

// Stack navigation component for game-related screens
const StackNavigator = () =>{
    return(
        <Stack.Navigator>

            {/* Screen to display the list of games */}
            <Stack.Screen
                name= "GameList"
                component={GameListScreen}
                options={{title:'Catalogo'}}
            />
            
            {/* Screen to display detailed information of a selected game */}
            <Stack.Screen
                name= "GameDetail"
                component={GameDetailScreen}
                options={{title: 'Detalle del juego'}}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;