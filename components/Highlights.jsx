import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const highlights = [
    { title: 'Quality Service', description: 'Exceptional care with a personal touch.', image: '/qual.jpg' },
    { title: 'Premium Facilities', description: 'State-of-the-art equipment and amenities.', image: '/site8.jpg' },
    { title: 'Positive Reviews', description: 'Highly rated by our satisfied clients.', image: '/rev2.jpg' },
    { title: 'Excellent Location', description: 'Conveniently located for easy access.', image: '/site13.png' },
];

const Highlights = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="bg-gray-50 py-16 px-6 sm:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6">Why Choose Us</h2>
                <p className="text-center text-sm lg:text-base text-gray-600 mb-12">
                    Discover what sets us apart and why we're your best choice.
                </p>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
                            data-aos="fade-up"
                        >
                            <div className="relative w-full h-48 lg:h-56">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    style={{ backgroundImage: `url(${highlight.image})` }}
                                ></div>
                                <div className="absolute bottom-4 left-4 right-4 bg-gray-700 bg-opacity-75 text-white text-left p-4 rounded-md border border-gray-500">
                                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                                    <p className="mt-2 text-sm">{highlight.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Highlights;
