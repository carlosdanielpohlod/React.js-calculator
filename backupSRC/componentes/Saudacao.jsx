import React, { Component } from 'react'

export default class Saudacao extends Component {
    state = {
        tipo: "Fala"
        ,nome:"Pedro"
    }
    setTipo(e){
        this.setState({
            tipo: e.target.value
        })
    }
    setNome(e){
        this.setState({nome: e.target.value})
    }
    constructor(props){
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }
    render(){
        const {tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>  
                
                <input type="text" value={tipo} onChange ={ e => this.setTipo(e)} />
                <input type="text" value={nome} onChange = {e => this.setNome(e)}/>
            </div>

        )
    }
}
