import React from 'react';
import '../styles/App.css';

const Footer = () => (
    <footer className="footer-modern">
        <div className="footer-inner">
            <div>© {new Date().getFullYear()} AC Repair Experts</div>
            <div>123 Cool Breeze Ave, HVAC City</div>
            <div><a href="mailto:support@acrepair.com">support@acrepair.com</a> | <a href="tel:1234567890">(123) 456‑7890</a></div>
        </div>
    </footer>
);

export default Footer;
