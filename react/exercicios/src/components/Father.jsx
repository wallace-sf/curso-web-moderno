import React from 'react';
import childrenWithProps from '../utils/utils';
// import Child from './Child';

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Child nome="Pedro" sobrenome={props.sobrenome} />
            <Child {...props} />
            <Child {...props} nome="Carla" /> */}

            {/* {props.children} */}
            {
                childrenWithProps(props)
            }
        </ul>
    </div>