import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, SafeAreaView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';


    export default SidB = function ({props}) {
        return (
            <ScrollView>
                <ImageBackground
                    source={require("../../assets/images/month1.png")}
                    style={{ width: undefined, padding: 16, paddingTop: 48, colo: '#fff' }}>
                    <Image source={require("../../assets/images/logo.png")} style={styles.profile} />
                    <Text style={styles.name}>Segunda Igreja Batista</Text>
                </ImageBackground>
                <View style={styles.container}>
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#000'
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',

    }
})