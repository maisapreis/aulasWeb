// Menu da aplicação

import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>

export default Nav;

// <a href="#"> substituido pela ferramenta do react-router-dom