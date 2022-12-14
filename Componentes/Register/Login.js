import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Button from '../Button/Button';
import {Icons} from 'TijucaPizza/Componentes/Img/eye'
function Login() {

  const [inPassword, setInPassword] = React.useState(true);

  return (
    <View style={style.titleB}>
      <Text style={style.login}>Login</Text>
      <Text style={style.user}>Usuario</Text>
      <TextInput style={style.input} 
      placeholder="Usuario" 
      placeholderTextColor='black'
      />
      <Text style={style.user}>Senha</Text>
    
      <TextInput style={style.input}
      placeholder="Senha"
      placeholderTextColor='black'
      secureTextEntry={inPassword}
      />
      <Button NameButton="Acessar"/>
      <TouchableOpacity onPress={() => setInPassword(!inPassword)}
      style={style.ImageA}>
        {inPassword == true?
        <Image source={require('TijucaPizza/Componentes/Img/closed_eye.png')}/> 
        :
        <Image source={require('TijucaPizza/Componentes/Img/eye.png')}/>}
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  titleB: {
    backgroundColor: '#ffffff9e',
    width: 410,
    height: 545,
    borderTopLeftRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
  },
  login: {
    color: 'black',
    padding: 20,
    paddingBottom: 60,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
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
  },
  user: {
    color: '#000000',
    paddingLeft: 50,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  ImageA: {
    left: 310,
    bottom: 150,
    height: 35 ,
    width: 35,
    padding: 20,
  }
});
export default Login;
