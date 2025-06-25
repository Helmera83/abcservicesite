import React from 'react';
import "../styles/App.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div>
                    <video
                        className="hero-video"
                        src="/video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>


                <div className="hg">
                    <h1>We Have Your HVAC Needs Covered</h1>
                    <p>Keep your home or business comfortable all year long. From AC repairs to furnace installations, A&B Contract Services delivers fast, friendly, and expert HVAC solutions—right when you need them.</p>
                    <div className="button-group">
                        <div className="button-group">
                            <a
                                href="https://forms.gle/YC4VYb5ZNt1PAVjGA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gradient"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
