import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

const Openingmap = () => {
    return (
        <ScrollView style={{flex:1}}>
            
                <WebView
                
                    originWhitelist={['*']}
                    source={{ uri:'https://rococo-seahorse-e41858.netlify.app/'}}
                    style={{ height: 600, width: 700, marginRight: 20,flex:1}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={false}
                    scalesPageToFit={true}
                />
        </ScrollView>
    );
};

export default Openingmap;