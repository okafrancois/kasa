import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './header.scss';
import logo from '../../assets/img/logo-kasa.svg'

const Header = () => {
    return (
        <header className={"header container"}>
            <Link to={"/"} className={"header__logo"}>
                <img src={logo} alt="Kasa"/>
            </Link>
            <nav>
                <NavLink to={"/"} end>Accueil</NavLink>
                <NavLink to={"/about"}>À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;
