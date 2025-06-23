import React from 'react';
import bgImage from "../assets/emergency.png";
import '../styles/App.css';

const CallToAction = () => (

    <section
        className="cta-section"
        style={{ backgroundImage: `url(${bgImage})` }}
    >

        <div className="cta-overlay">
            <p>24/7 Emergency HVAC Support</p>
            <a href="#contact" className="btn-cta">Book Service Now</a>
        </div>
    </section>
);

export default CallToAction;
