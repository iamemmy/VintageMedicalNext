import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Details() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative overflow-hidden py-16 sm:py-24 bg-transparent">
        <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0 opacity-30"
        >
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#blue-gradient)" />
            <defs>
                <radialGradient id="blue-gradient">
                    <stop stopColor="#3730dd" />
                    <stop offset={1} stopColor="#0066CC" />
                </radialGradient>
            </defs>
        </svg>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start px-6 sm:px-16">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                        src="/site1.png"
                        alt="Vintage Medical Centre"
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                
                <div className="lg:w-1/2 lg:pl-12 px-0">
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">Who we are</h2>
                    <p className="text-sm lg:text-base text-gray-700 mb-6 leading-6"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="450"
                        data-aos-offset="50"
                    >
                        Vintage Medical Centre: Where compassion and expertise converge. We are a trusted healthcare institution dedicated to providing exceptional medical care. Our renowned team of professionals combines skill, innovation, and a patient-centered approach to deliver comprehensive services. Experience the difference of personalized, quality healthcare that puts your well-being first.
                    </p>
                    <Link
                        href="tel:08098587274"
                        className="inline-block bg-brandcl01 text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-brandcl02 transition-colors duration-300"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="500"
                        data-aos-offset="50"
                    >
                        Connect with Us
                    </Link>
                </div>
            </div>
    </div>
  );
}
