import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  registerUser = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            userName,
            email,
          })
          .catch((error) => {
            alert(error.message)
          })
      })
      .catch((error=>{
        alert(error.message)
      }))
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 23,marginLeft:100 }}>
        Signup Here!
      </Text>
      <View style={{ marginTop: 40,marginLeft:10}}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your Name"
          onChangeText={(userName) => setUserName(userName)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={true}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => registerUser(email, password)}
        // onPress={() => Signup(email, password, userName)}
        style={styles.button}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Signup
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alginItems: 'center',
    marginTop: 100,
  },
  textInput: {
    paddinTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
    margintop:20,
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginLeft:50,
  }
})

