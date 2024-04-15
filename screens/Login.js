import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'

const Login = () => {
  const Navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  loginUser = async (email, password) => {
    try {
      console.log(email)
      await firebase.auth().signInWithEmailAndPassword(email, password)

    }
    catch (error) {
      alert(error.message)
    }

  }
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 30,marginLeft:100 }}>
        Login Page
      </Text>
     
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
          />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
          />
      </View>
      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.button}
      >
        <Text style={{fontWeight:'bold', fontSize:22}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Navigation.navigate('Signup')}
        style={{marginTop:20}}
      >
        <Text style={{fontWeight:'bold', fontSize:22,marginLeft:30}}>
          Don't have an account? Signup
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
const styles=StyleSheet.create({
  container: {
    flex:1,
    alginItems:'center',
    marginTop:100,
  },
  textInput:{
    paddinTop:10,
    paddingBottom:10,
    width:400,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#000',
    marginBottom:10,
    textAlign:'center',
  },
  button:{
    marginTop:50,
    marginLeft:60,
    height:70,
    width:250,
    backgroundColor:'purple',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
  }
})

