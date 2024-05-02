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

export default class GeometryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.algstyle}>Geometry Formulas</Text>
        </View>
        <Text style={styles.forstyle}>Perimeter of a Square = 4 × Side</Text>
        <Text style={styles.forstyle}>Perimeter of a Rectangle = 2 × (Length + Breadth)
</Text>
        <Text style={styles.forstyle}>Area of a Square = Side²
</Text>
        <Text style={styles.forstyle}>Area of a Rectangle = Length × Breadth
</Text>
        <Text style={styles.forstyle}>Area of a Triangle = ½ × Base × Height
</Text>
        <Text style={styles.forstyle}>(a-b-c)² = a²+b²+c²-2ab-2ac+2bc</Text>
        <Text style={styles.forstyle}>Area of a Trapezoid = ½ × (Base₁ + Base₂) × Height
</Text>
        <Text style={styles.forstyle}>Area of a Circle = A = π × r²
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
    marginBottom: 30,
    marginTop: 45
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
