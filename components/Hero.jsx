import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  const slides = [
    { imageUrl: '/img1.jpg', heading: 'Vintage Medical Centre', subheading: `Experience Healthcare at it's Best`},
    { imageUrl: '/site1.png', heading: 'Your Health, Our Priority', subheading: 'Providing Top-Notch Services' },
    { imageUrl: '/img2.jpg', heading: 'Experience Compassionate Care', subheading: 'Committed to Your Well-Being' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      loop={true}
      className="h-[50vh] lg:h-[70vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 text-center max-w-2xl mx-auto px-0">
              <p
                className="text-white text-lg font-medium mb-4"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                {slide.heading}
              </p>
              <h4
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                {slide.subheading}
              </h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
