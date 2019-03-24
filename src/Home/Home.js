import React, { Component } from 'react';

export default class Home extends Component {

    teste(mensagem) {
        alert(mensagem);
    }

    render() {
        return (
            <button onClick={() => this.teste('oi')}>CLIQUE</button>
        );
    }
}