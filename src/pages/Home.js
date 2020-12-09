import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Home extends Component {

    render() {

        return (
            <View>
                <SafeAreaView style={{justifyContent: 'center', alignContent: 'center' }} >              

                    <ImageBackground source={require("../../assets/images/img008.png")}
                        style={{ width: undefined, padding: 260, paddingTop: 390 }}>
                    </ImageBackground>
                    
                </SafeAreaView>               
                
            </View>
            
        )
    }
}
