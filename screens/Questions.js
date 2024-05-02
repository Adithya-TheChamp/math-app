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
import { CalculatorInput } from 'react-native-calculator';
import axios from 'axios';

export default class QuestionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.algstyle}>Questions</Text>
        </View>
        <Text style={styles.forstyle}>1. Solve 2x = 6</Text>
        <Text style={styles.forstyle}>2. Solve x + 5 = 15</Text>
        <Text style={styles.forstyle}>3. Solve 2x - 4 = x - 10</Text>
        <Text style={styles.forstyle}>
          4. Given the points (2, 6) and (4, -3), find the slope between the two
          points.
        </Text>
        <Text style={styles.forstyle}>
          5. Given the points (4, 10) and (3, 5), find the slope-intercept form
          of the line between the points.
        </Text>

        <View>
          <CalculatorInput
            fieldTextStyle={{ fontSize: 24, color: 'black', textAlign: 'center'}}
            modalAnimationType="slide"
            fieldContainerStyle={{ height: 36, backgroundColor: 'lightblue',marginTop: 10 }} 
            value = "calculator"
          />
        </View>
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
    marginBottom: 10,
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
    marginLeft: 5,
  },
});
