import React from 'react';
import '../styles/App.css';

const Footer = () => (
    <footer className="footer-modern">
        <div>
            <span>4835 Timberview Dr Ste H <br/>Sherman, TX 75090</span> <br/>
            <a href="mailto:aandbcontractservices@outlook.com">aandbcontractservices@outlook.com</a> <br/>
        <a href="tel:15803800080">(580) 380-0080</a>
        </div>
        <div className="footer-inner">© {new Date().getFullYear()} AC Repair Experts
        </div>
    </footer>




);

export default Footer;
