import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'



const Mapscreen = () => {
    const Navigation = useNavigation()
    const [name, setName] = useState('')
    useEffect(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data())
                }
                else {
                    console.log('User does not exist')
                }
            })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Welcome {name.userName}
            </Text>
            <TouchableOpacity
                onPress={() => { firebase.auth().signOut() }}
                style={styles.button}
            >

                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                    SignOut
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() =>
                
                 Navigation.navigate('Openingmap')}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 22 ,marginLeft:92,marginBottom:20}}>
                    View map here!
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Mapscreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alginItems: 'center',
        marginTop: 100,
    },

    button: {
        marginLeft:42,
        marginTop: 50,
        height: 70,
        width: 250,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }
})

