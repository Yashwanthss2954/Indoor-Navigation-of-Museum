import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { firebase } from './config';
import Login from "./screens/Login";
import Header from "./screens/Header";
import Signup from './screens/Signup';
import Mapscreen from './screens/Mapscreen';
import Openingmap from "./screens/Openingmap";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {WebView} from 'react-native-webview'
import * as ScreenOrientation from "expo-screen-orientation";

async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
       ScreenOrientation.OrientationLock.ALL
    );
    }
changeScreenOrientation()

const map='./screens/map';

const Stack =createStackNavigator();



function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  //Handler user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{
          headerTitle: () => <Header name="Museum Map" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: 'purple',
            elevation: 25
          }
        }}
        />
        <Stack.Screen name="Signup" component={Signup} options={{
          headerTitle: () => <Header name="Museum Map" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: 'purple',
            elevation: 25
          }
        }}
        />
        

      </Stack.Navigator>
  );
      }
      return(
        <Stack.Navigator>
          <Stack.Screen name="Mapscreen" component={Mapscreen} options={{
          headerTitle: () => <Header name="Museum Map" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: 'purple',
            elevation: 25
          }
        }}
        />
        <Stack.Screen name="Openingmap" component={Openingmap}/>

        </Stack.Navigator>
      )
      
}




export default () => {
  return (
    <NavigationContainer>
      
      <App />
    </NavigationContainer>
  )
}
