import React from 'react';

class ClassComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            manipulableState: Boolean(this.props.initialState) 
        }

        this.alterState = this.alterState.bind(this); // Realiza um ligação/conexão de contexto do this  
    }

    alterState() {
        this.setState({manipulableState: !this.state.manipulableState}); // Por conta do BIND está manipulação se torna robusta sem problemas de referencia
    }

    componentDidMount()
    {
        console.log('Componente Criado!');
    }

    componentDidUpdate()
    {
        console.log('Componente Atualizado!')
    }

    render()
    {
        return(
            <>
                <h1> Componente de Classe </h1>
                <p> State passado para classe: {String(this.state.manipulableState)} </p>
                <button onClick={this.alterState}>Inverter State</button>
            </>
        )
    }
}

export default ClassComponent;