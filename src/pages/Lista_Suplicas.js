import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground,SafeAreaView } from 'react-native';
import firebase from '../../firebase';

export default function Lista_Suplicas() {
    const [listFire, setListFire] = useState('');    

    // Metodo para listar
    useEffect(() => {
        var database = firebase.database();
        try {
            database.ref('/pedidos').on('value', (snapshot) => {
                const list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        name: childItem.val().name,
                        pedidos: childItem.val().pedidos,
                    });
                });
                setListFire(list);
            })

        } catch (e) {
            alert(e)
        }
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/images/blue-wave-background-vector.jpg")}
                style={{ flex: 1, width: undefined, padding: 15, paddingTop: 10 }}>
                 <Text style={styles.btnRegisterText}>Lista de Suplicas</Text>

                <FlatList style={styles.viewFlalist} data={listFire}
                    keyExtractior={(item) => item.key}
                    renderItem={({ item }) =>
                        <View style={styles.iconFlat}>
                            <Text style={styles.nametext}>{item.name}</Text>
                            <Text style={styles.pedidostext}>{item.pedidos}</Text>                      
                        </View>
                    }
                ></FlatList>
                
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,      
   
    },
    nametext: {
        marginTop:-25,
        color: '#000',
        fontSize:16,
        textAlign:'center'
    },   
    pedidostext: {
        marginTop:2,
        color: '#000',
        fontSize:15,
        textAlign:'center'
    },   
    iconFlat: {
        width: 300,
        height: 90,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },  
    btnRegisterText:{
        marginLeft:70,
        fontSize:18
    },   
    viewFlat: {
        maxHeight: 300,
    }
});

