import React from "react"
import Button from "../Button/Button"
import {View, Text, StyleSheet, Image} from "react-native"

function Title(){
  return(
    <View style={style.titleB}>
      <Text style={style.Text}>Tijuca</Text>
      <Text style={style.Text1}>Pizza</Text>
      <Image 
    source={require('TijucaPizza/Componentes/Img/pizza1.png')}
    style={style.imgPizza}/> 
    </View>
  )
}

const style = StyleSheet.create({
    titleB:{
        width:420,
        height:300,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Text: {
        
        color:'#000',
        fontSize: 50,
        fontWeight: 'bold',
    },
    Text1: {
      display:'flex',
      flexDirection:'row',
      color: '#ffff',
      fontSize: 30,
      fontWeight: 'bold',
  },
  imgPizza:{
    width:100,
    height:100,
  }
})
export default Title