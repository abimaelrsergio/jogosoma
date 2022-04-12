import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

class NumeroAleatorio extends React.Component {
    static protoTypes = {
        numero: PropTypes.number.isRequired,
    };
    render() {
        return (
            <Text style={estilos.aleatorios}>{this.props.numero}</Text>
        );
    }
}
const estilos = StyleSheet.create({
    aleatorios: {
        backgroundColor: '#999',
        width: 100,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },
});
export default NumeroAleatorio;
