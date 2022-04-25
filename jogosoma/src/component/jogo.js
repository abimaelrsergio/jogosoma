import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import NumeroAleatorio from './numero-aleatorio.js';
class Jogo extends React.Component {
    static propTypes = {
        totalNumeroRandomico: PropTypes.number.isRequired,
    };
    state = {
        idsSelecionados: [],
    };
    numerosAleatorios = Array
        .from({ length: this.props.totalNumeroRandomico })
        .map(() => 1 + Math.floor(10 * Math.random()));
    target = this.numerosAleatorios
        .slice(0, this.props.totalNumeroRandomico - 2)
        .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
    isNumeroBloqueado = (indiceNumero) => { 
        return this.state.idsSelecionados.indexOf(indiceNumero) >= 0;
    };
    numerosEscolhidos = (indice)=> {
        this.setState((prevState) => ({
            idsSelecionados: [...prevState.idsSelecionados, indice],
        }));
        console.log('numeros selecionados: ', this.state.idsSelecionados)
    };
    statusDoJogo = () => {
        const somatoria = this.state.idsSelecionados.reduce((acumulador, numeroAtual) => {
            return acumulador + this.numerosAleatorios[numeroAtual];
        }, 0);
        //console.warn('o resultado da soma: ', somatoria);
        if (somatoria < this.target) {
            return 'JOGANDO';
        }
        if (somatoria === this.target) {
            return 'GANHOU';
        }
        if (somatoria > this.target) {
            return 'PERDEU';
        }
    };
    render() {
        const mensagemStatus = this.statusDoJogo();
        return (
            <View style={estilos.container}>
                <Text style={[estilos.target, estilos[`STATUS_${mensagemStatus}`]]}>
                    {this.target}
                </Text>
                <View style={estilos.containerNumerosAleatorios}>
                    {this.numerosAleatorios.map((numero, indice) => (
                        <NumeroAleatorio 
                            chave={indice} 
                            id={indice}
                            numero={numero} 
                            bloqueado={this.isNumeroBloqueado(indice)}
                            onPress={this.numerosEscolhidos}
                        />
                    ))}
                </View>
                <Text>{ mensagemStatus }</Text>
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
        marginHorizontal: 50,
        textAlign: 'center',
        margin:50,
    },
    STATUS_JOGANDO: {
        backgroundColor: '#aaa',
    },
    STATUS_GANHOU: {
        backgroundColor: 'green',
    },
    STATUS_PERDEU: {
        backgroundColor: 'red',
    },
});
export default Jogo;
