import React from 'react';
import"../styles/App.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <div className="info">
                        <h4>Contact Us</h4>
                        <p>Email: abservices@contractor.net</p>
                        <p>Phone: (580) 380-0080</p>
                    </div>
                </div>
                <div className="footer-right">
                    <h4>Serving DFW and Texoma</h4>
                    <div className="footer-badges">
                        <img src="/badges/5.png" alt="Certified" />
                        <img src="/badges/3.png" alt="Certified" />
                        <img src="/badges/4.png" alt="Certified" />
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} A&B Contract Services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
