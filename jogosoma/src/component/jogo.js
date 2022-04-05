import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Jogo extends React.Component {
    render() {
        return (
            <View style={ estilo.container }>
                <Text>567</Text>
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    }
});

export default Jogo;
