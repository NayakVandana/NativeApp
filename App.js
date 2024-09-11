import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';

const Stack = createNativeStackNavigator;
const App = () => {
  const [show,setShow] = useState(false);

  const btnAction= ()=>{
    console.warn("btn pressed");
  }
  return (
    <NavigationContainer style={styles.conatiner}>

      <Stack.Navigator
       ScreenOptions={{       
        headerStyle:{
          backgroundColor:'blue',
        },
        headerTintColor:'orange',
        headerTitleStyle:{
          fontSize:25
        }
      }}
      >
         <Stack.Screen name='Login' component={Login} 
        options={{   
          headerTitle:()=><Button onPress={btnAction} title='Left'/>, 
          headerRight:()=><Header/>,        
          headerStyle:{
            backgroundColor:'skyblue',
          },
          headerTintColor:'white',
          headerTitleStyle:{
            fontSize:40
          }
        }}
         />
        <Stack.Screen name='Home' component={Home}/>
      
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};


const Header = () => {
  
  return (
    <Button title='btn'/>
  );
};


export default App;


//npm install react-native-screens react-native-safe-area-context

//npm install @react-navigation/native-stack
