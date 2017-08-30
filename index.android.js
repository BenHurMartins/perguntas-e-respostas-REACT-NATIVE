//imports
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Criar Component
const App = () => {
  return (
    <Text>Ola</Text>
  );
};


//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
