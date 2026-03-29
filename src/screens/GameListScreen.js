import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {SafeAreaView}from 'react-native-safe-area-context';

import styles from '../styles/GameListStyles';

const GameListScreen = ({ navigation }) =>{
    
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState (true);

    // Simular carga de datos 
  useEffect(() => {
    setTimeout(() => {
      setGames([
        {
          id: '1',
          title: 'God of War',
          platform: 'PS5',
          genre: 'Action',
          price: 60,
          ageRating: '17+',
          description: 'Epic adventure of Kratos and Atreus'
        },
        {
          id: '2',
          title: 'FIFA 24',
          platform: 'PS5',
          genre: 'Sports',
          price: 50,
          ageRating: 'Todos',
          description: 'Football simulation game'
        },
        {
          id: '3',
          title: 'Zelda: Breath of the Wild',
          platform: 'Switch',
          genre: 'Adventure',
          price: 55,
          ageRating: 'Todos',
          description: 'Open world exploration in Hyrule'
        },
        {
          id: '4',
          title: 'Call of Duty',
          platform: 'Xbox',
          genre: 'Shooter',
          price: 65,
          ageRating: '17+',
          description: 'War and action FPS game'
        }
      ]);
      setLoading (false);
     }, 2000);
    }, []);

    //Render con cada tarjeta
    const renderItem = ({item}) =>(
        <TouchableOpacity
            style={styles.card}
            onPress={()=> navigation.navigate('GameDetail',{ game: item})}
        >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.platform}</Text>
            <Text style={styles.text}>{item.genre}</Text>
        </TouchableOpacity>
    );

    //Loading
    if (loading) {
        return(
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large"/>
                    <Text>Cargando videojuegos</Text>
            </SafeAreaView>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={games}
                keyExtractor={(item)=>item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};
export default GameListScreen;