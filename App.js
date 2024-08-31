import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Student from './components/Student';

class App extends Component {
  constructor(props) {
    super(props); // Call super to initialize the component
    this.state = {
      name: 'Test',
    };

    // Bind the updateName method to this component
    this.updateName = this.updateName.bind(this);
  }

  updateName(val) {
    this.setState({ name: val });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.name}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={this.updateName}
        />
        <Button title="Press Me" onPress={() => alert('Button Pressed')} />
        <Student name={this.state.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: 'red',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
});

export default App;
