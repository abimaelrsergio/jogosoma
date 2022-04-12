import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import NumeroAleatorio from './numero-aleatorio.js';
class Jogo extends React.Component {
    propTypes = {
        totalNumeroRandomico: PropTypes.string.isRequired,
    };
    numerosAleatorios = Array
        .from({ length: this.props.totalNumeroRandomico })
        .map(() => 1 + Math.floor(10 * Math.random()));
    target = this.numerosAleatorios
        .slice(0, this.props.totalNumeroRandomico - 2)
        .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.target}>{this.target}</Text>
                <View style={estilos.containerNumerosAleatorios}>
                    {this.numerosAleatorios.map((numero, indice) =>
                        <NumeroAleatorio chave={indice} numero={numero}/>
                    )}
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    containerNumerosAleatorios: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
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
        margin:50,
    }
});
export default Jogo;
