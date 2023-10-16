import React from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/heroSection/HeroSection';
import HowItWorks from '../components/howItWork/HowItWorks';
import Events from '../components/events/Events';
import TrustedBy from '../components/trustedBy/TrustedBy';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Events />
      <TrustedBy />
      <Footer />
    </>
  );
};

export default Home;
