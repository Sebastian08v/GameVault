import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView}from 'react-native-safe-area-context';

import styles from '../styles/GamingNewsStyles';
import {GAMING_NEWS} from '../data/gamingNewsData';

const GamingNewsSCreen = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [news] = useState(GAMING_NEWS);
    const [message, setMessage] = useState('');

    //rotacion automatica (con cleanup)
    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000); 

    return () => clearInterval(interval);
}, [news.length]);

    //actualizar mensaje cada vez que cambia la noticia

    useEffect(()=>{
        setMessage(`Noticia ${currentIndex + 1} de ${news.length}`);
    },[currentIndex]);

    const handleNext = () =>{
        setCurrentIndex((currentIndex + 1) % news.length);
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{news[currentIndex].title}</Text>
                <Text style={styles.content}>{news[currentIndex].content}</Text>
                <Text style={styles.counter}>{message}</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleNext}
                >
                    <Text style={styles.buttonText}>Siguiente noticia</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default GamingNewsSCreen;