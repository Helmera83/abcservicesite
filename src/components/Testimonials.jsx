import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/App.css';
const testimonials = [
    {
        name: "Sarah M.",
        quote: "Super fast and professional!",
        location: "Frisco, TX",
        stars: 5
    },
    {
        name: "Jason R.",
        quote: "Fair pricing & clear explanations.",
        location: "Plano, TX",
        stars: 4
    },
    {
        name: "Linda T.",
        quote: "Reliable & friendly every time!",
        location: "Allen, TX",
        stars: 5
    },
    {
        name: "Mark D.",
        quote: "They fixed our AC in under an hour — amazing!",
        location: "Richardson, TX",
        stars: 5
    },
    {
        name: "Emily N.",
        quote: "Professional, timely, and courteous.",
        location: "McKinney, TX",
        stars: 4
    },
    {
        name: "Carlos H.",
        quote: "They go above and beyond to ensure everything works perfectly.",
        location: "Garland, TX",
        stars: 5
    },
    {
        name: "Brianna K.",
        quote: "Best HVAC service I’ve used in DFW!",
        location: "Arlington, TX",
        stars: 5
    },
    {
        name: "James W.",
        quote: "Honest pricing and great communication.",
        location: "Fort Worth, TX",
        stars: 4
    },
    {
        name: "Tina L.",
        quote: "Quick diagnosis and no hidden fees.",
        location: "Carrollton, TX",
        stars: 5
    },
    {
        name: "Nathan S.",
        quote: "Tech arrived early and was super polite!",
        location: "Irving, TX",
        stars: 5
    }
];
const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};
const Testimonial = () => (
    <section id="testimonials" className="testimonial-modern">
       < h2>What Our Customers Say</h2>
        <Slider {...settings}>
            {testimonials.map((t, i) => (
                <div key={i}>
                    <p className="quote">"{t.quote}"</p>
                    <div className="stars">{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
                    <p className="name">{t.name}, <span className="location">{t.location}</span></p>
                </div>
            ))}
        </Slider>
    </section>
);

export default Testimonial;
