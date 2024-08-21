import React from 'react';
import {Button, Text, View} from 'react-native';
import UserData  from './componets/UserData';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello Text Componet1</Text>
      <UserData/>      
    </View>
  );
};

export default App;
