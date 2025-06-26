import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './components/Services';
import Testimonial from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import './styles/index.css';


const App = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <> <main>
          <Navbar/>
            <Hero />
            <Services />
                <Testimonial />
                <CallToAction />
            <Footer />
        </main>
        </>
    );
};

export default App;
