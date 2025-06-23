import React from 'react';
import bgImage from "../assets/emergency.png"
import '../assets/cta.png'
import '../styles/App.css';

const CallToAction = () => (

    <section
        className="cta-section"
        style={{ backgroundImage: `url(${bgImage})` }}
    >

        <div className="cta-overlay">
            <h2>24/7 Emergency HVAC Support</h2>
            <p>We’re ready when you need us — book a technician now!</p>
            <a href="#contact" className="btn-cta">Book Service Now</a>
        </div>
    </section>
);

export default CallToAction;
