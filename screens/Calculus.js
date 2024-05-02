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

export default class CalculusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.algstyle}>Calculus Formulas</Text>
        </View>
        <Text style={styles.forstyle}>Ltx→0 (xn - an)(x - a) = na. (n - 1)
</Text>
        <Text style={styles.forstyle}>∫ xn dx = xn + 1/(n + 1) + C.

</Text>
        <Text style={styles.forstyle}>∫ ex dx = ex + C.
</Text>
        <Text style={styles.forstyle}>d/dx (xn) = nx. n - 1
</Text>
        <Text style={styles.forstyle}>d/dx (Constant) = 0.
</Text>
        <Text style={styles.forstyle}>d/dx (ex) = e. x
</Text>
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
    marginBottom: 10
  },
  algstyle: {
    fontSize: 37,
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
