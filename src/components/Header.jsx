import React from 'react';
import '../styles/App.css';
import logo from '../assets/logo2.png';

const Header = () => (
    <header className="header-modern">
        <div className="header-inner">
            <img src={logo} alt="AC Repair Logo" className="logo" />
            <nav className="nav-modern">
                <a href="#services">Services</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>
);

export default Header;
