import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.nome}! Sua idade é {props.idade}</h1>,
    <h1 key='h2'>Até breve!</h1>
]

/* export default props =>
    <React.Fragment>
        <h1>Bom dia {props.nome}! Sua idade é {props.idade}</h1>
        <h1>Até breve!</h1>
    </React.Fragment> */

/* export default props =>
    <div>
        <h1>Bom dia {props.nome}! Sua idade é {props.idade}</h1>
        <h1>Até breve!</h1>
    </div> */