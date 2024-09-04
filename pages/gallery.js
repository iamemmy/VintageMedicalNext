import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopHeader from '../components/TopHeader';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

const galleryImages = [
    { src: '/site1.png', alt: 'Gallery Image 1' },
    { src: '/site2.png', alt: 'Gallery Image 2' },
    { src: '/site3.png', alt: 'Gallery Image 3' },
    { src: '/site6.png', alt: 'Gallery Image 3' },
    { src: '/site11.png', alt: 'Gallery Image 3' },
    { src: '/site12.png', alt: 'Gallery Image 3' },
    { src: '/site13.png', alt: 'Gallery Image 3' },
    { src: '/theatre.png', alt: 'Gallery Image 3' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const handleClosePreview = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <Head>
                <title>Gallery | Vintage Medical Centre</title>
            </Head>
            <TopHeader />
            <Navbar />
            <div className="relative bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 
                        className="text-2xl lg:text-3xl font-extrabold mb-6"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >Gallery</h2>
                    <p 
                        className="text-sm lg:text-base text-gray-700 mb-12"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        Explore our gallery to see a collection of moments and highlights.
                    </p>
                    <div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >
                        {galleryImages.map((image, index) => (
                            <div key={index} className="relative group cursor-pointer h-[30vh]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={200}
                                    className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105"
                                    onClick={() => handleImageClick(image.src)}
                                />
                            </div>
                        ))}
                    </div>
                    {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 lg:p-0">
                            <div className="relative bg-white rounded-lg">
                                <Image
                                    src={selectedImage}
                                    alt="Selected Preview"
                                    width={800}
                                    height={600}
                                    className="object-contain rounded-lg max-h-[70vh] border border-white"
                                />
                                <button
                                    onClick={handleClosePreview}
                                    className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-3 lg:px-4 py-1 lg:py-2 shadow-lg hover:bg-red-600"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
