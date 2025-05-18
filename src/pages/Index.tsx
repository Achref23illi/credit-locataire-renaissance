
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceCards from '@/components/ServiceCards';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <ServiceCards />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
