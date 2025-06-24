import React from 'react';
import "../styles/App.css";
import StarBorder from "./StarBorder.jsx";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <video
                    className="hero-video"
                    src="/video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="hg">
                    <h1>Your Comfort, Our Priority</h1>
                    <p>Expert HVAC services 24/7</p>
                    <div className="button-group">
                        <button className="btn-gradient">Book Now</button>
                        <button className="btn-outline">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
