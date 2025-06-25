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
            <div>
                <a
                    href="https://forms.gle/YC4VYb5ZNt1PAVjGA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta"
                >
                    Book Now
                </a>
            </div>
        </div>
    </section>
);

export default CallToAction;
