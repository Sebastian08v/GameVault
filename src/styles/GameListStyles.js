import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
      flex:1,
      padding:10,
      backgroundColor: '#673AB7'
  },

  card:{
      backgroundColor: '#FFFFFF',
      padding: 15,
      marginBottom: 10,
      borderRadius: 10,
      elevation: 3,
      flexDirection: 'row',      
      alignItems: 'center'
  },

  info: {
      flex: 1,
      paddingRight: 10
  },

  title:{
      fontSize: 18,
      fontWeight: 'bold'
  },

  text:{
      fontSize: 14,
      marginTop: 5
  },

  image: {
      width: 80,
      height: 80,
      borderRadius: 8,
  }
});
