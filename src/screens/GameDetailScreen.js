import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView}from 'react-native-safe-area-context';

import styles from '../styles/GameDetailStyles';

const GameDetailScreen = ({route, navigation}) =>{
    
    //Recibir parametros
    const {game}=route.params;
    const [isFavorite, setIsFavorite] = useState (false);

    useEffect(()=>{
        console.log('Game changed: ',game.title);
    },[game]);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Plataforma: {game.platform}</Text>
                <Text style={styles.text}>Genero: {game.genre}</Text>
                <Text style={styles.text}>Precio: ${game.price}</Text>
                <Text style={styles.text}>Clasificacion: {game.ageRating}</Text>
                <Text style={styles.description}>{game.description}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>
                        setIsFavorite(!isFavorite)}
                >
                    <Text style={styles.buttonText}>
                        {isFavorite ? 'En favoritos' : 'Agregar a favoritos'}
                    </Text>
                </TouchableOpacity>

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
