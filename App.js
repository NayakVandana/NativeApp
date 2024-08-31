import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';


const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn('do some animation');
  // }, [count]);

  // useEffect(() => {
  //   console.warn('call some api here');
  // }, [data]);

  return (
    <View>
      <Text style={{fontSize: 30}}>
        {data} Life Cycle with Use effect {count}
      </Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)} />
      <Button title="Update data" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
};

const User = (props) => {
  // console.warn(props.info);

  useEffect(() => {
    console.warn('run this code when prop is update');
  }, [props.info.data]);

  useEffect(() => {
    console.warn('run this code when prop is update');
  }, [props.info.count]);

  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>
        data : {props.info.data}
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>
        data : {props.info.count}
      </Text>
    </View>
  );
};
export default App;
