import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import axios from 'axios';

export default class AlgebraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.algstyle}>Algebra Formulas</Text>
        </View>
        <Text style={styles.forstyle}>a² – b² = (a-b)(a+b)</Text>
        <Text style={styles.forstyle}>(a+b)² = a² + 2ab + b²</Text>
        <Text style={styles.forstyle}>(a-b)² = a² – 2ab + b²</Text>
        <Text style={styles.forstyle}>a² + b² = (a-b)² +2ab</Text>
        <Text style={styles.forstyle}>(a+b+c)² = a²+b²+c²+2ab+2ac+2bc</Text>
        <Text style={styles.forstyle}>(a-b-c)² = a²+b²+c²-2ab-2ac+2bc</Text>
        <Text style={styles.forstyle}>a³-b³ = (a-b) (a² + ab + b²)</Text>
        <Text style={styles.forstyle}>a³+b³ = (a+b) (a² – ab + b²)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  titleBar: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  algstyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  forstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightgreen',
    marginLeft: 5
  },
});
