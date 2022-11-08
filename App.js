import React from "react"
import {View, StyleSheet} from "react-native"
import Title from "./Componentes/Title/Title"
import Login from "./Componentes/Register/Login"
import Register from "./Componentes/Register/Register"
function App(){
  return(
    <View style={style.body}>
      <Title/>
      <Login/>
    </View>
  )
}
const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#f68d3b',
    width: '100%',
    height: '100%',
  }
})
export default App