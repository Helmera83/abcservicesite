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
                    <h1>Your Comfort <br/>is Our Priority</h1>
                    <p>Expert HVAC services 24/7</p>
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
