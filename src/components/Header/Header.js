import React from 'react'
import './Header.css'
import Logo from './logo.svg'
import Settings from './settings.svg'
import { Link } from 'react-router-dom'

function Header(props) {
    const loginStatusText = props.isLoggedIn ? 'Log out' : 'Log In';
    const loginStatusLink = props.isLoggedIn ? 'logout' : 'login';
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link className="header__logo" to="/">
                    <img className="header__logo-img" src={Logo} alt="netflix"></img>
                </Link>
                <nav className="header__nav">
                    <Link className="header__link" to="/settings">
                        <img className="header__settings-img" src={Settings} alt="settings"></img>
                    </Link>
                    <Link className="header__link" to={loginStatusLink}>{loginStatusText}</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
