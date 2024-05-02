import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import CalculusScreen from "./screens/Calculus";
import AlgebraScreen from "./screens/Algebra";
import GeometryScreen from "./screens/Geometry";
import QuestionScreen from "./screens/Questions";
import GameScreen from "./screens/Games"

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown:false}}>
    <Stack.Screen name = "Home" component = {HomeScreen}/>
    <Stack.Screen name = "Calculus" component = {CalculusScreen}/>
    <Stack.Screen name = "Algebra" component = {AlgebraScreen}/>
    <Stack.Screen name = "Geometry" component = {GeometryScreen}/>
    <Stack.Screen name = "Questions" component = {QuestionScreen}/>
    <Stack.Screen name = "Games" component = {GameScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
