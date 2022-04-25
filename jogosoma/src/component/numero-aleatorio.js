import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class NumeroAleatorio extends React.Component {
    static protoTypes = {
        key: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        numero: PropTypes.number.isRequired,
        bloqueado: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    };
    handlePress = () => { 
        if (this.props.bloqueado) { 
            return; 
        }
        this.props.onPress(this.props.id);
    };
    render() {
        console.log('bloqueado', this.props.bloqueado);
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text 
                    style={[ estilos.aleatorios, this.props.bloqueado && estilos.desabilitados ]} 
                    key={this.props.id}
                >
                    {this.props.numero}
                </Text>
            </TouchableOpacity>
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
    desabilitados: {
        opacity: 0.3
    }
});
export default NumeroAleatorio;
