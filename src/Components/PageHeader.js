// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './PageHeader.css';

export default function PageHeader() {
    return (
        <header id="page-header">
            <h1 id="page-title">Jeffrey + Molly</h1>
            <nav id="header-nav">
                <ul id="header-list">
                    <li className="header-item">
                        <NavLink
                            className='nav-link'
                            to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink
                            className='nav-link'
                            to='/'>
                            The Wedding
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink
                            className='nav-link'
                            to='/'>
                            The Registry
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink
                            className='nav-link'
                            to='/'>
                            The Pics
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink
                            className='nav-link'
                            to='/'>
                            Request A Song
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink
                            className='nav-link'
                            to='/'>
                            Send A Message
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}