import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopHeader from '../components/TopHeader';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Head>
                <title>Contact | Vintage Medical Centre</title>
            </Head>
            <TopHeader />
            <Navbar />
            <div className="relative bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 
                        className="text-2xl lg:text-3xl font-extrabold mb-6"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >Contact Us</h2>
                    <p 
                        className="text-sm lg:text-base text-gray-700 mb-12"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        We would love to hear from you. Please reach out to us through the contact form or visit us at our location.
                    </p>
                    
                    <div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                            <form action="https://formsubmit.co/vintagemedical@gmail.com" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-left text-sm font-medium text-gray-900">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brandcl01 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-left text-sm font-medium text-gray-900">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brandcl01 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-left text-sm font-medium text-gray-900">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-brandcl01 sm:text-sm"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-brandcl01 text-white py-2 px-4 rounded-md shadow-md hover:bg-brandcl02 focus:outline-none focus:ring-2 focus:ring-brandcl01"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="relative">
                            <div className="aspect-w-16 aspect-h-9 h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1733479588206!2d7.403394073923755!3d9.047947288694335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75d1ddbacd7b%3A0x106d0b13260e4945!2sVINTAGE%20MEDICAL%20CENTRE%2C%20CITEC%20ESTATE-ABUJA!5e0!3m2!1sen!2sng!4v1688927304891!5m2!1sen!2sng"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
