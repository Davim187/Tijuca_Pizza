import React from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'

function input({NamePlace}){
    const [inPassword, setInPassword] = React.useState(true);

    return(
        <View>
        
      <TextInput style={style.input} 
      placeholder="Usuario" 
      placeholderTextColor='black'
      id='User'
      /></View>
    )
}
const style = StyleSheet.create({
    input: {
      marginLeft: 30,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 20,
      width: 350,
      fontSize: 20,
      paddingLeft: 20,
      marginBottom: 30,
      color: '#000',
    }
  });
export default input;