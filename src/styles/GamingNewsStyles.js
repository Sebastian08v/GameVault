import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#673AB7',
        justifyContent: 'center'
    },

    card:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        elevation: 4
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    content:{
        fontSize: 16,
        marginBottom: 15
    },

    counter:{
        fontSize: 14,
        marginBottom: 15,
        color: '#555'
    },

    button:{
        backgroundColor: '#673AB7',
        padding: 12,
        borderRadius: 8,
        alignContent: 'center'
    },

    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
});