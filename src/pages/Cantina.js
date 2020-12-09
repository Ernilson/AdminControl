import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ImageBackground, SafeAreaView } from 'react-native';
import firebase from '../../firebase';

export default function Cantina() {

    const [name, setName] = useState('');
    const [pedidos, setPedidos] = useState('');
    const [listFire, setListFire] = useState('');

    function createFirebase() {
        var database = firebase.database();
        try {
            database.ref('/cantina').push({
                name: name,
                pedidos: pedidos,
            });

        } catch (e) {
            alert(e)
        }
        finally {
            setName('');
            setPedidos('');
        }
    }

    // Metodo para listar
    useEffect(() => {
        var database = firebase.database();
        try {
            database.ref('/cantina').on('value', (snapshot) => {
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

    function delFire(key) {
        var database = firebase.database();
        database.ref('/cantina/' + key).remove();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/images/corapp.jpg")}
                style={{ flex: 1, width: undefined, padding: 40, paddingTop: 20 }}>
                <Text style={styles.btnRegisterText}>Menu</Text>

                <FlatList style={styles.viewFlalist} data={listFire}
                    keyExtractior={(item) => item.key}
                    renderItem={({ item }) =>
                        <View style={styles.iconFlat}>
                            <Text style={styles.pedidostext}>{item.pedidos}</Text>

                            <TouchableOpacity style={styles.btnDelete} onPress={() => { delFire(item.key) }}>
                                <Text style={styles.textDel}>Delete</Text>
                            </TouchableOpacity>

                        </View>
                    }
                ></FlatList>

                <TextInput style={styles.pedidosInput}
                    onChangeText={pedidos => setPedidos(pedidos)} value={pedidos}
                    placeholder="Digite o Prato do dia! " />

                <TouchableOpacity style={styles.btnEnviar} onPress={createFirebase}>
                    <Text style={styles.textEnv}>Enviar</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pedidostext: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center'
    },
    textDel: {
        color: 'green',
        fontSize: 15
    },
    textEnv: {
        color: 'green',
        fontSize: 25
    },
    btnRegisterText: {
        marginLeft: 110,
        fontSize: 17
    },
    pedidosInput: {
        width: 300,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 2,
        textAlign: 'center',
        marginTop: 5,
    },
    btnEnviar: {
        margin: 10,
        width: 80,
        marginLeft: 110

    },
    iconFlat: {
        width: 290,
        height: 140,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    btnDelete: {
        width: 100,
        height: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginTop: 60,
    },
    viewFlat: {
        maxHeight: 410,
    }
});

