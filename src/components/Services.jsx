import React from 'react';
import '../styles/App.css';
import { FaTools, FaSnowflake, FaWind, FaFilter, FaThermometerHalf, FaFan } from 'react-icons/fa';

const services = [
    {
        icon: <FaSnowflake />,
        title: 'AC Installation',
        desc: 'Efficient installations tailored to your space.'
    },
    {
        icon: <FaTools />,
        title: 'Repair & Maintenance',
        desc: 'Fast diagnostics and trustworthy repairs.'
    },
    {
        icon: <FaWind />,
        title: 'Duct Cleaning',
        desc: 'Enhance airflow and indoor air quality.'
    },
    {
        icon: <FaFilter />,
        title: 'Air Filter',
        desc: 'Clean filters for better breathing and system efficiency.'
    },
    {
        icon: <FaThermometerHalf />,
        title: 'Thermostat Setup',
        desc: 'Smart thermostat installation and configuration.'
    },
    {
        icon: <FaFan />,
        title: 'Ventilation Solutions',
        desc: 'Balanced airflow systems for every room.'
    }
];

const Services = () => (
    <section id="services" className="services-modern">
        <h2>Our Services</h2>
        <div className="grid-services">
            {services.map((s, i) => (
                <div className="card-service" key={i}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Services;
