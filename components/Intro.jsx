import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {
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
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h4
          className="text-base font-semibold text-black"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="450"
          data-aos-offset="50"
        >
          Welcome To Vintage Medical Centre
        </h4>
        <h1
          className="mt-4 text-2xl lg:text-3xl font-extrabold text-black"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos-offset="50"
        >
          We Provide Premium and Exclusive Healthcare Services.
        </h1>
        <p
          className="mt-6 text-sm lg:text-base text-black/90 leading-6"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="550"
          data-aos-offset="50"
        >
          Welcome to Vintage Medical Centre, where excellence meets care. Experience our premium and exclusive healthcare 
          services designed to prioritize your well-being. Our dedicated team of professionals is committed to delivering
          personalized medical attention, advanced treatments, and state-of-the-art facilities. Trust us to provide the 
          highest level of medical expertise and compassion, ensuring your health is in capable hands.
        </p>
      </div>
    </div>
  );
}
