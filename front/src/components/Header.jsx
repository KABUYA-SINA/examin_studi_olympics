import React, { useContext }from 'react'
import { NavLink, Link } from 'react-router-dom';
import "../sass/layout/_header.scss";
import {AuthContext} from '../pages/AuthContext';

export default function Header() {
    const { isLoggedIn, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <header id='heading' className='heading-page' data-testid="header">
            <Link to='/' className="logo" data-testid="logo">
                <h1>Olympics</h1>
            </Link>
            <nav className='nav_header' data-testid="nav">
                <ul>
                    <li className='nav-first' data-testid="ticket">
                        <NavLink to="/tickets" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                            Tickets
                        </NavLink>
                    </li>
                    {!isLoggedIn && (
                        <li className='nav-second' data-testid="connect">
                            <NavLink to="/connect" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                                Connect
                            </NavLink>
                        </li>
                    )}
                    <li className='nav-second' data-testid="panier">
                        <NavLink to="/basket" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                            Panier
                        </NavLink>
                    </li>
                    {isLoggedIn && (
                        <li className='nav-second'>
                            <button onClick={handleLogout} className='logout-button'>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}