import React from 'react';
import ReactDOM from 'react-dom';

import Father from './components/Father';
import Child from './components/Child';

ReactDOM.render(
    <div>
        <Father nome="Paulo" sobrenome="Silva">
            {/* Como passar os filhos para o componente pai? */}
            
            <Child nome="Pedro"/>
            <Child nome="Paulo" sobrenome="Silva"/>
            <Child nome="Carla" sobrenome="Silva"/>
        </Father>
    </div>
    , document.getElementById('root'));