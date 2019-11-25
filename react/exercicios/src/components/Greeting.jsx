import React, { Component } from 'react';

export default class Greeting extends Component {
    constructor(props) {
        super(props)
        // this.setTipo = this.setTipo.bind(this)
        this.state = {
            tipo: this.props.tipo,
            nome: this.props.nome
        }
    }


    // setTipo(e) {
    //     this.setState({ tipo: e.target.value })
    // }

    // setNome(e) {
    //     this.setState({ nome: e.target.value })
    // }

    // Método mais eficiente de atualizar os states sem criar um set para cada State

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    // O this em método funcional é undifined. Porém em um arrow funciona

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { tipo, nome } = this.state;

        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                {/* Jeito antigo utilizando um método cada para atualizar o State */}
                {/* <input type="text" placeholder="Tipo..." value={tipo}
                    onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={e => this.setNome(e)} /> */}
                <input 
                    type="text" 
                    placeholder="Tipo..."
                    name="tipo" 
                    value={tipo}
                    onChange={this.onChange} />
                <input 
                    type="text" 
                    placeholder="Nome..." 
                    name="nome"
                    value={nome}
                    onChange={this.onChange} />
            </div>
        )
    }
}