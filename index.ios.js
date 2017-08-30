//imports
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

// Formatacoes
const Estilos = {
    principal : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPrincipal : {
      color : '#538530',
      fontSize : 30
    },
    botao : {
      backgroundColor : '#538530',
      paddingVertical : 10,
      paddingHorizontal : 40,
      marginTop: 20
    },
    textoBotao : {
      color : 'white',
      fontSize : 16,
      fontWeight : 'bold'
    }
};

//Criar Component
const App = () => {
  const{ principal, botao, textoBotao, textoPrincipal } = Estilos;
  return (
    <View style={ principal }>

        <Text style={ textoPrincipal }>Faça uma Pergunta!</Text>
        <Text style={ textoPrincipal }>e eu te respondo</Text>

        <TouchableOpacity style={botao}
        onPress={gerarNovaFrase}>
          <Text style={ textoBotao }>Resposta</Text>
        </TouchableOpacity>

    </View>
  );
};

const gerarNovaFrase = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.round(numeroAleatorio * 6)

    //frases
    var frases = Array();
    frases[0] = 'Sim';
    frases[1] = 'Não';
    frases[2] = 'Talvez';
    frases[3] = 'Acho que sim';
    frases[4] = 'Com Toda Certeza';
    frases[5] = 'Claro que não';

    var fraseEscolhida = frases[numeroAleatorio];

    Alert.alert(fraseEscolhida)
}
//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
