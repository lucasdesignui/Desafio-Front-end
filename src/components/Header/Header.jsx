import React, { Component } from 'react';

import './header.scss';
import OwliLogo from 'assets/svg/Owli.svg';

class Header extends Component {
    render() {
        return (
            <header id="headerOwli">

                <nav className="menuOptions">
                    <a href="/" id="brandOwliHome">
                        <img src={OwliLogo} alt="Logo Owli, vá para a Home" id="imgOwliBrand" />
                    </a>

                    <ol className="homeOptions">
                        <li>
                            <a href="/home">Início</a>
                        </li>
                        <li>
                            <a href="/home/recursos">Recursos</a>
                        </li>
                        <li>
                            <a href="/home/planos">Planos</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                    </ol>

                    <ul className="loginBuyOptions">
                        <li>
                            <a href="/login" rel="noopener noreferrer">Entrar</a>
                        </li>
                        <li className="itemBuy">
                            <a href="/comprar" rel="noopener noreferrer">Comprar</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;