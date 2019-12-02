import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/imgs/logo.png';

export default props =>
    <aside className="logo">
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
    </aside>