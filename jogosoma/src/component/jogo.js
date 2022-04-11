import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Jogo extends React.Component {
    render() {
        return (
            <View style={ estilos.container }>
                <Text style={estilos.target}>567</Text>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 30,
    },
    target: {
        fontSize: 40,
        backgroundColor: '#aaa',
        marginHorizontal: 50,
        textAlign: 'center',
    }
});
export default Jogo;
