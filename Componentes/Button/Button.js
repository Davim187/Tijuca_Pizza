import React from 'react'
import {View,Text, TouchableOpacity,StyleSheet } from 'react-native'

function Button({NameButton, onpress}){
 return (
        <View>
         <TouchableOpacity style={style.Button} onPress={onpress}>
            <Text style={style.Text} >
                {NameButton}
            </Text>
         </TouchableOpacity>
        </View>
 )
}
const style = StyleSheet.create({
    Button:{
        backgroundColor:'#f68d3b',
        width:350,
        height:40,
        marginTop:10,
        marginBottom:10,
        marginLeft:30,
        borderRadius:10,      
        padding: 5,
        
    },
    Text:{
        fontSize:20,
        textAlign:'center',
    }

 })
export default Button