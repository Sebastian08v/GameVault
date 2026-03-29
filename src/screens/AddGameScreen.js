import React, {useState, useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, 
    Alert, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView}from 'react-native-safe-area-context';

import styles from '../styles/AddGameStyles';

const AddGameScreen = () =>{
    //Estados del formulario
    const [title, setTitle] = useState('');
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');
    const [ageRating, setAgeRating] = useState('');
    
    const [isValid, setIsValid] = useState(false);

    //Validacion en tiempo real
    useEffect(()=>{
        if(
            title.trim()!== '' &&
            platform.trim()!== '' &&
            genre.trim()!== '' &&
            ageRating.trim()!== '' &&
            !isNaN(price) &&
            price !==''
        ){
            setIsValid(true);
        }else{
            setIsValid(false);
        }
    },[title,platform,genre,price,ageRating]);

    //Agregar juego
    const handleAddGame = () =>{
        Alert.alert(
            'Juego agregado',
            `Titulo: ${title}
            Plataform: ${platform}
            Genero: ${genre}
            Precio: ${price}
            Clasificacion: ${ageRating}`
        );
    };

    //Limpiar formulario
    const handleClear = () =>{
        setTitle('');
        setPlatform('');
        setGenre('');
        setPrice('');
        setAgeRating('');
    };

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding': undefined }>
                <Text style={styles.title}>Agregar videojuego</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Titulo del juego'
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Plataforma (PS5, Xbox, PC, Switch)'
                    value={platform}
                    onChangeText={setPlatform}
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Genero (Accion, RPG, Deportes...)'
                    value={genre}
                    onChangeText={setGenre}
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Precio'
                    value={price}
                    onChangeText={setPrice}
                    keyboardType='numeric'
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Clasificacion (Todos, 13+, 18+)'
                    value={ageRating}
                    onChangeText={setAgeRating}
                />

                {/* Boton Agregar */}
                <TouchableOpacity style = {[styles.button,
                    { backgroundColor: isValid ? '#4CAF50' : '#aaa'}]}
                    onPress={handleAddGame}
                    disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Agregar juego</Text>                        
                </TouchableOpacity>

                {/* Boton Limpiar */}
                <TouchableOpacity style={styles.clearButton}
                    onPress={handleClear}
                >
                    <Text style={styles.buttonText}>Limpiar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AddGameScreen;