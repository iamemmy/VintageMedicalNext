import { useEffect } from "react";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HMOPage() {

    useEffect(() => {
        AOS.init();
    }, []);

    const hmoList = [
        'United Health Care Int\'l',
        'DOT HMO',
        'Venus Medicare',
        'Integrated Health Care',
        'GNI Health Care',
        'Zuma Health Care',
        'Novo Health Care',
        'HYGEA',
    ];

    return (
        <div>
            <Head>
                <title>HMO | Vintage Medical Centre</title>
            </Head>
            <TopHeader />
            <Navbar />
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 
                        className="text-2xl lg:text-3xl font-extrabold mb-6"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >Our HMO Partners</h2>
                    <p 
                        className="text-sm lg:text-base text-gray-700 mb-12"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        As a testament to our commitment to quality care, we are proud to be HMO accredited, ensuring that our services meet the highest standards of healthcare excellence and patient satisfaction.
                    </p>
                    <div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >
                        {hmoList.map((hmo, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                                <p className="text-sm font-medium text-gray-900">{hmo}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
