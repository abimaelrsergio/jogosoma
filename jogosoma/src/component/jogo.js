import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

class Jogo extends React.Component {
    propTypes = {
        totalNumeroRandomico: PropTypes.string.isRequired,
    };
    numerosAleatorios = Array
                   .from({ length: this.props.totalNumeroRandomico })
                   .map( () => 1 + Math.floor(10 * Math.random()) );
    target = this.numerosAleatorios
                 .slice(0, this.props.totalNumeroRandomico - 2)
                 .reduce( (valorAnterior, valorAtual) => valorAnterior + valorAtual, 0 );
    render() {
        return (
            <View style={ estilos.container }>
                <Text style={estilos.target}>{this.target}</Text>
                {
                    this.numerosAleatorios.map((numero) => <Text>{numero}</Text>)
                }
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
