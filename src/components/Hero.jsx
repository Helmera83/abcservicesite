import React from 'react';
import '../styles/App.css'; // Assume this contains styling for gradient overlay, animation, etc.

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background">
                <img
                    src="/cta.png" // Replace with actual path
                    alt="HVAC technician"
                    className="hero-image"
                />
                <div className="hero-overlay" />
            </div>

            <div className="hero-content slide-in">
                <h1>
                    Reliable HVAC Installation & Repair
                </h1>
                <p>
                    Trusted, timely, and tailored heating and cooling solutions.
                </p>
                <button className="cta-button">
                    Get a Free Estimate
                </button>
            </div>
        </section>
    );
};

export default Hero;
