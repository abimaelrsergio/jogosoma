import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';
import NumeroAleatorio from './numero-aleatorio.js';

class Jogo extends React.Component {
    static propTypes = {
        totalNumeroRandomico: PropTypes.number.isRequired,
        tempoJogo: PropTypes.number.isRequired,
        onPlayAgain: PropTypes.func.isRequired
    };
    state = {
        gameId: 1,
        idsSelecionados: [],
        tempoRestante: this.props.tempoJogo
    };
    statusDoJogo = 'JOGANDO';
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((estadoAnterior) => {
                return { tempoRestante: estadoAnterior.tempoRestante - 1 };
            }, () => {
                if (this.state.tempoRestante === 0) {
                    clearInterval(this.intervalId);
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentWillUpdate(propriedades, proxEstado) {
        if (proxEstado.idsSelecionados !== this.state.idsSelecionados || proxEstado.tempoRestante === 0) {
            this.statusDoJogo = this.calcularStatusDoJogo(proxEstado);
            if (this.statusDoJogo !== 'JOGANDO') {
                clearInterval(this.intervalId);
            }
        }
    }
    numerosAleatorios = Array
        .from({ length: this.props.totalNumeroRandomico })
        .map(() => 1 + Math.floor(10 * Math.random()));
    target = this.numerosAleatorios
        .slice(0, this.props.totalNumeroRandomico - 2)
        .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
    isNumeroBloqueado = (indiceNumero) => {
        return this.state.idsSelecionados.indexOf(indiceNumero) >= 0;
    };
    numerosEscolhidos = (indice) => {
        this.setState((prevState) => ({
            idsSelecionados: [...prevState.idsSelecionados, indice],
        }));
    };
    calcularStatusDoJogo = (proxEstado) => {
        const somatoria = proxEstado.idsSelecionados.reduce((acumulador, numeroAtual) => {
            return acumulador + this.numerosAleatorios[numeroAtual];
        }, 0);
        if (proxEstado.tempoRestante === 0) {
            return 'PERDEU';
        }
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
        const mensagemStatus = this.statusDoJogo;
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
                            bloqueado={
                                this.isNumeroBloqueado(indice) || mensagemStatus !== 'JOGANDO'
                            }
                            onPress={this.numerosEscolhidos}
                        />
                    ))}
                </View>
                {this.statusDoJogo !== 'JOGANDO' && (
                    <Button title='Jogar de novo' onPress={this.props.onPlayAgain} />
                )}
                <Text>{this.state.tempoRestante}</Text>
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
        margin: 50,
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
