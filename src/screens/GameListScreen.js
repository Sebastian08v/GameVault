import React, {useState, useEffect} from 'react';
import {View,Image, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from '../styles/GameListStyles';

// Main screen component to display the list of games
const GameListScreen = ({ navigation }) =>{
    
    // State to store the list of games
    const [games, setGames] = useState([]);

    // State to control loading indicator 
    const [loading, setLoading] = useState (true);

  // Simulate API call using useEffect
  useEffect(() => {
    setTimeout(() => {
      setGames([
        {
          id: '1',
          title: 'God of War ⚔️🔥',
          platform: 'PS5',
          genre: 'Action',
          price: 60,
          ageRating: '17+',
          description: 'Epic adventure of Kratos and Atreus',
          image: require('../assets/images/godOfWar.png')
        },
        {
          id: '2',
          title: 'FIFA 24 ⚽🏆',
          platform: 'PS5',
          genre: 'Sports',
          price: 50,
          ageRating: 'Todos',
          description: 'Football simulation game',
          image: require('../assets/images/Fifa14.png')
        },
        {
          id: '3',
          title: 'Zelda: Breath of the Wild 🗡️🛡️',
          platform: 'Switch',
          genre: 'Adventure',
          price: 55,
          ageRating: 'Todos',
          description: 'Open world exploration in Hyrule',
          image: require('../assets/images/zelda.png')
        },
        {
          id: '4',
          title: 'Call of Duty 🔫💣',
          platform: 'Xbox',
          genre: 'Shooter',
          price: 65,
          ageRating: '17+',
          description: 'War and action FPS game',
          image: require('../assets/images/callOfDuty.png')
        }
      ]);

      // Stop loading after data is set
      setLoading (false);
     }, 2000); // Simulated delay (2 seconds)
    }, []);

    // Function to render each item in the FlatList
    const renderItem = ({item}) =>(
        <TouchableOpacity
            style={styles.card}
            // Navigate to GameDetail screen and pass selected game
            onPress={()=> navigation.navigate('GameDetail',{ game: item})}
        >

            {/* Game information section */}
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.platform}</Text>
              <Text style={styles.text}>{item.genre}</Text>
            </View>

            {/* Game image */}
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
        </TouchableOpacity>
    );

    // Show loading indicator while data is being fetched
    if (loading) {
        return(
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large"/>
                    <Text>Cargando videojuegos</Text>
            </SafeAreaView>
        );
    }

    // Main render: display list of games
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
