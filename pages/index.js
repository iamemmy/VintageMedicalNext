import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Intro from '../components/Intro';
import TopHeader from '../components/TopHeader';
import Services from '../components/Services';
import Details from '../components/Details';
import Appointment from '../components/Appointment';
import Reviews from '../components/Reviews';
import FAQSection from '../components/Faqs';
import HMOsection from '../components/HMOsection';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  if (loading) {
    return (
      <>
        <TopHeader />
        <Navbar />
        <Spinner />
      </>
    );
  }

  return (
    <div>
      <TopHeader />
      <Navbar />
      <Hero />
      <Intro />
      <Highlights />
      <Details />
      <Services />
      <Appointment />
      <Reviews />
      <HMOsection />
      <FAQSection />
      <Footer />
    </div>
  );
}
