import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/team" className="nav-link">Team</Link>
                </li>
                <li className="nav-item">
                    <Link to="/info" className="nav-link">Info</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
