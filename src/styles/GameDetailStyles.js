import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15,
        backgroundColor: '#f2f2f2'
    },

    card:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        elevation: 4
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
    },

    text:{
        fontSize: 16,
        marginBottom: 5
    },

    description:{
        marginTop: 10,
        fontSize: 14,
        fontStyle: 'italic'
    },

    button:{
        marginTop: 10,
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },

    backButton:{
        marginTop: 10,
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },

    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})