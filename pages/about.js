import React, { useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TopHeader from '../components/TopHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>About | Vintage Medical Centre</title>
      </Head>
      <TopHeader />
      <Navbar />
      <div className="bg-transparent">

        <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8 text-center">
          <h1
            className="text-2xl lg:text-3xl font-extrabold text-gray-900"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            About Us
          </h1>
          <p
            className="mt-6 text-sm lg:text-base leading-6 text-gray-800 max-w-5xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            Welcome to Vintage Medical Centre: Your Trusted Healthcare Destination in Abuja
            located at Plot 3213, F Road Citec Mount Pleasant Estate, Mbora District, Abuja, Vintage Medical Centre stands as a beacon of exceptional healthcare services in the region. Our commitment to providing top-notch medical care, coupled with a patient-centric approach, sets us apart as a leading healthcare institution. Comprehensive Services for Holistic Care
            Vintage Medical Centre offers a wide range of comprehensive healthcare services designed to address the diverse needs of our patients. From general consultations and preventive care to specialized treatments and surgical procedures, our team of experienced physicians and healthcare professionals are dedicated to ensuring your well-being. Patient-Centered Approach
            At Vintage Medical Centre, we believe that healthcare is not just about treating ailments; it is about forging meaningful connections with our patients. We prioritize building trust through open communication, active listening, and involving patients in their healthcare decisions. Our compassionate and empathetic approach ensures that you feel valued, heard, and supported throughout your healthcare journey. State-of-the-Art Facilities and Technology
            To deliver the highest standard of care, Vintage Medical Centre boasts state-of-the-art facilities and leverages advanced medical technology. Our modern diagnostic equipment enables accurate assessments, precise diagnoses, and efficient treatment planning. Additionally, our in-house pharmacy ensures convenient access to medications and expert guidance from our knowledgeable pharmacists. Visit Vintage Medical Center
            We invite you to experience the exceptional care and personalized attention at Vintage Medical Centre. Whether you require routine check-ups, specialized care, or emergency medical services, our dedicated team is here to serve you. Schedule an appointment with us today and let us be your trusted partner on your path to optimal health and well-being.
          </p>
        </div>

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
          <div className="bg-transparent py-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="lg:text-center">
                <h2
                  className="text-2xl lg:text-3xl font-bold text-gray-900"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  Our Mission
                </h2>
                <p
                  className="mt-4 text-sm lg:text-base leading-6 text-gray-600 max-w-3xl mx-auto"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Our goal is to deliver exceptional care, foster healing, and improve well-being by combining compassion, innovation, and excellence, ensuring every patient receives the highest standard of healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent">
          <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
            <div className="lg:text-center">
              <h2
                className="text-2xl lg:text-3xl font-bold text-gray-900"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Our Values
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <h3 className="text-lg font-semibold text-gray-800">Compassion</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    We care deeply about our patients and treat them with the kindness and empathy they deserve.
                  </p>
                </div>
                <div
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <h3 className="text-lg font-semibold text-gray-800">Integrity</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Honesty and transparency are at the core of our practice. We uphold the highest ethical standards.
                  </p>
                </div>
                <div
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="600"
                >
                  <h3 className="text-lg font-semibold text-gray-800">Excellence</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    We are committed to delivering top-notch healthcare services and continually improving our practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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
          <div className="bg-transparent text-black py-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h2
                className="text-2xl lg:text-3xl font-bold"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Meet Our MD
              </h2>
              <p
                className="mt-4 text-sm lg:text-base max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                Get to know our Medical Director, a dedicated professional committed to providing exceptional healthcare services and leading our team with expertise and compassion.
              </p>
              <Link
                href="https://drive.google.com/file/d/1-B7uV5Jjpt2Rf8Gso_kHi1x5GXng12hd/view?usp=drivesdk"
                className="inline-block mt-8 text-white bg-brandcl01 text-sm font-semibold px-6 py-3 rounded-md shadow-md hover:bg-brandcl02"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
