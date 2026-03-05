import React from 'react';
import Hero from '../Hero';
import Features from '../Features';
import FAQ from '../FAQ';
import Button from '../ui/button';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Hero />
      <Features />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200">Get Started</Button>
      </div>
      <FAQ />
    </div>
  );
};

export default LandingPage;
