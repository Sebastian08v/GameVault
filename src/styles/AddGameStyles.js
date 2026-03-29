import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#673AB7'
    },

    title:{
        color:'#050000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15
    },

    input:{
        backgroundColor: '#aaa',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2
    },

    button:{
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },

    clearButton:{
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#f44336'
    },

    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
});