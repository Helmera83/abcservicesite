import React from 'react';
import '../styles/App.css';

const services = [
    { title: 'AC Installation', desc: 'Efficient installations tailored to your space.' },
    { title: 'Repair & Maintenance', desc: 'Fast diagnostics and trustworthy repairs.' },
    { title: 'Duct Cleaning', desc: 'Enhance airflow and indoor air quality.' },
];

const Services = () => (
    <section id="services" className="services-modern">
        <h2>Our Services</h2>
        <div className="grid-services">
            {services.map((s, i) => (
                <div className="card-service" key={i}>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Services;
