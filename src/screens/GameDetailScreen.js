import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView}from 'react-native-safe-area-context';

import styles from '../styles/GameDetailStyles';

// Screen component to display detailed information about a selected game
const GameDetailScreen = ({route, navigation}) =>{
    
    // Extract game data passed through navigation params
    const {game}=route.params;
    // Local state to manage favorite toggle
    const [isFavorite, setIsFavorite] = useState (false);

     // Effect triggered when the game changes (useful for debugging or tracking)
    useEffect(()=>{
        console.log('Game changed: ',game.title);
    },[game]);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>

                {/* Display game basic information */}
                <Text style={styles.text}>Plataforma: {game.platform}</Text>
                <Text style={styles.text}>Genero: {game.genre}</Text>
                <Text style={styles.text}>Precio: ${game.price}</Text>
                <Text style={styles.text}>Clasificacion: {game.ageRating}</Text>
                <Text style={styles.description}>{game.description}</Text>

                 {/* Toggle favorite button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>
                        setIsFavorite(!isFavorite)}
                >
                    <Text style={styles.buttonText}>
                        {isFavorite ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
                    </Text>
                </TouchableOpacity>
                
                {/* Navigation button to go back to previous screen */}
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={()=> navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default GameDetailScreen;
