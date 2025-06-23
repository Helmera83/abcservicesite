import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Services from './components/Services';
import Testimonial from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './styles/index.css';
import Hero from "./components/Hero.jsx";

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <main>
                <Services />
                <Testimonial />
                <CallToAction />
            </main>
            <Footer />
        </>
    );
};

export default App;
