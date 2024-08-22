import React from 'react';
import {Button, Text, View} from 'react-native';

const UserData = (props) => {
 console.warn(props);
  return(
    <View style={{backgroundColor :'green',padding:5}}>
      <Text style={{fontSize: 20}}>{props.name}</Text>
    </View>
  )
}

export default UserData;
