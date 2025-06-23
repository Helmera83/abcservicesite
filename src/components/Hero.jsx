import React from 'react';
import "../assets/my hero background.mp4";
import "../styles/App.css";
import GradientText from "../components/GradientText.jsx";
import StarBorder from "./StarBorder.jsx";

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero-content">
                <div>
                    <h1>
                        <GradientText
                            colors={["#ee6d3c", "#467af3", "#1a00ff", "#ff4500", "#ff100f"]}
                            animationSpeed={7}
                            showBorder={false}
                            className="custom-class"
                        >
                            STAY COOL
                        </GradientText>
                    </h1>
                    <div className="some-text">
                        <p>With Professional HVAC installation and Repair</p>
                    </div>
                    <div className="button-group">
                        <button className="btn-gradient">Book Now</button>
                        <button className="btn-outline">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
