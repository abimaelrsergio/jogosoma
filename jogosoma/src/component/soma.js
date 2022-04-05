import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Jogo from './jogo';

export default function Soma() {
    return <View style={estilos.container}>
        <Jogo />
    </View>
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1
    }
});
