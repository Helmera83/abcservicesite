import React, { useState } from 'react';
import '../styles/App.css';
import GradientText from "./GradientText.jsx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <GradientText
                    colors={["#ee6d3c", "#467af3", "#1a00ff", "#7cfab7", "#ff100f"]}
                    animationSpeed={7}
                    showBorder={false}
                    className="custom-class"
                > A&B
                </GradientText>
            </div><p>Contract Services</p>
        </nav>
    );
};

export default Navbar;
