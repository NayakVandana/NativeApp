import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator;
const App = () => {
  const [show,setShow] = useState(false);
  return (
    <NavigationContainer style={styles.conatiner}>

      <Stack.Navigator>
         <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};


const Home = () => {
  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:30}}>Home screen</Text>
    </View>
  );
};

const Login = (props) => {
  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:30}}>Login screen</Text>
       <Button title='Go to Home Page' onPress={()=> props.navigation.navigate("Home")}/>
    </View>
  );
};



export default App;


//npm install react-native-screens react-native-safe-area-context

//npm install @react-navigation/native-stack
