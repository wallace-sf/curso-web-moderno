import React from 'react';
import ReactDOM from 'react-dom';

import Multiples, { GoodEvening } from './components/Multiples';

ReactDOM.render(
    <div>
        <Multiples.GoodAfternoon nome="Wallace" />
        <GoodEvening nome="Jesus" />
    </div>
    , document.getElementById('root'));