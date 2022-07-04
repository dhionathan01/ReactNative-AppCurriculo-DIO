import React from "react";
import { View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import profileFoto from './assets/ProfileImg.jpg';

const App = () => {
  function redeSocial(redes_social) {
    switch (redes_social) {
      case 'github':
        Alert.alert('Meu Github','https://github.com/dhionathan01')
      break
      case 'facebook':
        Alert.alert('Meu Facebook','https://www.facebook.com/dhionathan.jobim')
      break
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/dhionathan-jobim')
      break
    }
  }
  return (
    <>
      
      <View style={style.page}>
        <View style={style.containerCabecalho}>
          <Image source={profileFoto} style={style.foto}></Image>
          <Text style={style.nome}>Dhionathan Lanzoni Jobim</Text>
          <Text style={style.funcao}>Estudante de Desenvolvimento</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={()=> redeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> redeSocial('facebook')}>
              <Icon name="facebook" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> redeSocial('linkedin')}>
            <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
            
            
          </View>
        </View>

        <View style={style.cardContainer}>
          <View style={style.card}>
            <View style={style.cardHead}>
              <Text>Experiências</Text>
            </View>
            <View style={style.cardContent}>
              <Text style={style.cardContentText}> BC DIO HTML/CSS/JS/ReactNative</Text>
            </View>
          </View>
        </View>

        <View style={style.cardContainer}>
          <View style={style.card}>
            <View style={style.cardHead}>
              <Text>Ensino</Text>
            </View>
            <View style={style.cardContent}>
              <Text style={style.cardContentText}>Graduação Análise e Desenvolvimento de Sistemas</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};


const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  containerCabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,

  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '60%',
    marginTop: 20,

  },
  cardContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderSize: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
  },
  cardContent: {
    marginTop: 10,
  },

  cardContentText: {
    color: '#939393',
    marginBottom: 10,

  },

});
export default App;