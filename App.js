import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);
  const getAPIData = async () => {
    //api call
    // console.warn("hello");

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const result = await fetch(url);
    result = await result.json();

    // console.warn(result);
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 40}}>API Call</Text>
      {data ? (
        <View >
          <Text style={{fontSize: 30}}>{data.id}</Text>
          <Text style={{fontSize: 30}}>{data.userId}</Text>
          <Text style={{fontSize: 30}}>{data.title}</Text>
          <Text style={{fontSize: 30}}>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;

//npm install @react-navigation/material-top tabs react-native-tab-view

//npm install react-native-pager-view
