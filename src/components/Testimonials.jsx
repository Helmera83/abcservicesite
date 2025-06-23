import React from 'react';
import '../styles/App.css';

const testimonials = [
    {
        name: "Sarah M.", quote: "Super fast and professional!", location: "Phoenix, AZ", stars: 5,
        avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
        name: "Jason R.", quote: "Fair pricing & clear explanations.", location: "Tampa, FL", stars: 4,
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        name: "Linda T.", quote: "Reliable & friendly every time!", location: "Austin, TX", stars: 5,
        avatar: "https://i.pravatar.cc/150?img=28"
    }
];

const Testimonial = () => (
    <section id="testimonials" className="testimonial-modern">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
            {testimonials.map((t, i) => (
                <div className="testimonial-card" key={i}>
                    <img src={t.avatar} alt={t.name} className="avatar" />
                    <p className="quote">"{t.quote}"</p>
                    <div className="stars">{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
                    <p className="name">{t.name}, <span className="location">{t.location}</span></p>
                </div>
            ))}
        </div>
    </section>
);

export default Testimonial;
