import React from "react";
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import profileFoto from './assets/ProfileImg.jpg';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.containerCabecalho}>
          <Image source={profileFoto} style={style.foto}></Image>
          <Text style={style.nome}>Dhionathan Lanzoni Jobim</Text>
          <Text style={style.funcao}>Estudante de Desenvolvimento</Text>
          <View>
            <Icon name="github" size={30}/>
            <Icon name="facebook" size={30}/>
            <Icon name="linkedin" size={30}/>
          </View>
        </View>
      </View>
    </>
  );
};


const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex:1,
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  containerCabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,

  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  }

});
export default App;