import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Jogo from './jogo';

class Soma extends React.Component {
    state = {
        idJogo: 1,
    };
    reiniciarJogo = () => {
        this.setState((prevState) => {
            return { idJogo: prevState.idJogo + 1 };
        });
    };
    render() {
        return (
        <Jogo key={this.state.idJogo} 
              onPlayAgain={this.reiniciarJogo}
              totalNumeroRandomico={6} 
              tempoJogo={10} />
        );
    };
}
export default Soma;
