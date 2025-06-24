import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h4>Contact Us</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main St, Dallas, TX</p>
                </div>
                <div className="footer-right">
                    <h4>Your Trusted DFW Partner</h4>
                    <p>We bring solutions that move your business forward.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
