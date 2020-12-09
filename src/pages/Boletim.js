import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import firebase from '../../firebase';

export default function Boletim({ navigation }) {

    const [suplicas, setSuplicas] = useState('');
    const [listFire, setListFire] = useState('');

    function createFirebase() {
        var database = firebase.database();
        try {
            database.ref('/boletin').push({
                suplicas: suplicas
            });

        } catch (e) {
            alert(e)
        }
        finally {
            setSuplicas('');
        }
    }

    // Metodo para listar
    useEffect(() => {
        var database = firebase.database();
        try {
            database.ref('/boletin').on('value', (snapshot) => {
                const list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        suplicas: childItem.val().suplicas,
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
        database.ref('/boletin/' + key).remove();
    }

    return (

        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/images/corapp.jpg")}
                style={{ flex: 1, width: undefined, padding: 40, paddingTop: 20 }}>
                <Text style={styles.btnRegisterText}>Boletim</Text>
                <FlatList style={styles.viewFlalist} data={listFire}
                    keyExtractior={(item) => item.key}
                    renderItem={({ item }) =>
                        <View style={styles.iconFlat}>
                            <Text style={styles.pedidostext}>{item.suplicas}</Text>

                            <TouchableOpacity style={styles.btnDelete} onPress={() => { delFire(item.key) }}>
                                <Text style={styles.text}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    }
                ></FlatList>

                <TextInput style={styles.pedidosInput}
                    onChangeText={suplicas => setSuplicas(suplicas)} value={suplicas}
                    placeholder="Digite sua Mensagem. " />

                <TouchableOpacity style={styles.btnEnviar} onPress={createFirebase}>
                    <Text style={styles.enviar}>Enviar</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnRegisterText: {
        marginLeft: 110,
        fontSize: 17,
        marginTop: -10
    },
    enviar: {
        color: '#000',
        fontSize: 16,
        marginLeft: 70,
        marginTop: -50
    },
    text: {
        color: '#000',
        fontSize: 10,
    },
    pedidostext: {
        marginTop: 0,
        color: '#000',
        fontSize: 13.5,
        margin: 11,
        
    },
    iconFlat: {
        width: 300,
        height: 150,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        textAlign:'center'

    },
    pedidosInput: {
        flexDirection: 'row',
        width: 300,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 2,
        textAlign: 'center',
                
    },
    btnEnviar: {
        margin: 15,
        //borderWidth: 2,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
    },
    btnDelete: {
        borderWidth: 1,
        borderColor: 'red',
        width: 60,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -10,
        marginTop:-5
    },
    viewFlat: {
        maxHeight: 300,
    }

});
