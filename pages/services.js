import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Services() {
    const services = [
        {
            title: 'General Consultation',
            description: 'Comprehensive health assessments and personalized medical advice.',
            icon: '/icon5.png',
        },
        {
            title: 'Antenatal Care',
            description: 'Expert monitoring and support throughout pregnancy.',
            icon: '/icon7.png',
        },
        {
            title: 'Gynecological & Obstetrics Care',
            description: 'Care and guidance for women’s health and childbirth.',
            icon: '/icon6.png',
        },
        {
            title: 'Surgical Procedures',
            description: 'Advanced surgical care with the latest technology.',
            icon: '/icon8.png',
        },
        {
            title: 'Emergency Services',
            description: '24/7 urgent care and rapid response.',
            icon: '/icon16.png',
        },
        {
            title: 'Laboratory',
            description: 'Accurate diagnostic testing and results.',
            icon: '/icon9.png',
        },
        {
            title: 'Ultrasound Scan',
            description: 'High-resolution imaging for patient assessment.',
            icon: '/icon10.png',
        },
        {
            title: 'Pharmacy',
            description: 'Access to medications and expert advice.',
            icon: '/icon11.png',
        },
    ];

    return (
        <div>
            <TopHeader />
            <Navbar />
            <div className="bg-gray-50 py-16 px-6 sm:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-center text-gray-900">Our Services</h2>
                    <p className="text-sm lg:text-base mt-4 text-center text-gray-600">
                        At Vintage Medical Centre, we offer a wide range of healthcare services to meet your needs.
                    </p>
                    <div className="mt-12 grid gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
                            >
                                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
                                    <Image src={service.icon} height={200} width={200} alt={`${service.title} icon`} className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg lg:text-xl text-center font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-sm lg:text-base mt-2 text-center text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}