import React from 'react';
import './Header.css'; 

function Header() {
    return (
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">TARA</a>
                <button className="navbar-toggler" aria-label="Toggle navigation">
                    ☰
                </button>
                <div className="navbar-links">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
