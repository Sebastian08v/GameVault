import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView}from 'react-native-safe-area-context';

import styles from '../styles/GamingNewsStyles';
import {GAMING_NEWS} from '../data/gamingNewsData';

// Screen component to display gaming news with auto-rotation
const GamingNewsSCreen = () =>{

    // State to track the current news index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Store news data in state (static in this case)
    const [news] = useState(GAMING_NEWS);

    // State to display a dynamic message ("News 1 of 5")
    const [message, setMessage] = useState('');

    // Effect to automatically change news every 5 seconds
    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000); 

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
}, [news.length]);

    // Effect to update the message when the current index changes
    useEffect(()=>{
        setMessage(`Noticia ${currentIndex + 1} de ${news.length}`);
    },[currentIndex]);

    // Function to manually go to the next news item
    const handleNext = () =>{
        setCurrentIndex((currentIndex + 1) % news.length);
    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{news[currentIndex].title}</Text>
                <Text style={styles.content}>{news[currentIndex].content}</Text>
                <Text style={styles.counter}>{message}</Text>
                
                {/* Button to manually switch to next news */}
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