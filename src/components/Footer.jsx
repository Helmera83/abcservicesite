import React from 'react';
import '../styles/App.css';

const Footer = () => (
    <footer className="footer-modern">
        <div>4835 Timberview Dr Ste H Sherman, TX 75090</div>
        <div><a href="mailto:aandbcontractservices@outlook.com">aandbcontractservices@outlook.com"</a>
            <a href="tel:15803800080">(580) 380-0080</a></div>
        <div className="footer-inner">
            <div>© {new Date().getFullYear()} AC Repair Experts</div>
        </div>
    </footer>




);

export default Footer;
