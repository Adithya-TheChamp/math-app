import React, {Component} from 'react';
import{
  Text,
  View,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Linking  
}
from 'react-native';
export default class GameScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <View style = {styles.titleBar}>
      <Text style = {styles.algstyle}>
      Games
      </Text>
      <Text style = {styles.forstyle} onPress = {()=>{
        Linking.openURL('https://www.algebra4children.com/games.html')
      }}>Algebra Games-1
      </Text>

      <Text style = {styles.forstyle} onPress = {()=>{
        Linking.openURL('https://www.mathgames.com/')
      }}>Algebra Games-2</Text>

      <Text style = {styles.forstyle} onPress = {()=>{
        Linking.openURL('https://www.mathplayground.com/index_geometry.html')
      }}>Geometry Games-1</Text>
      
      <Text style = {styles.forstyle} onPress = {()=>{
        Linking.openURL('https://www.abcya.com/games/get-in-shape-geometry')
      }}>Geometry Games-2</Text>

      <Text style = {styles.forstyle} onPress = {()=>{
        Linking.openURL('https://www.onlinemathlearning.com/calculus-games.html')
      }}>Calculus Games-1</Text>
      <Text style = {styles.forstyle} onPress = {()=>{
        Linking.openURL('https://www.mathgames.com/')
      }}>Calculus Games-2</Text>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
  },
  titleBar: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 50
  },
  algstyle: {
    fontSize: 37,
    fontWeight: 'bold',
    color: 'white'
  },
  forstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightgreen',
    marginLeft: 5
  }
})