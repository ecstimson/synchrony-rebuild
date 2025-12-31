import React from 'react';
import { Button } from './ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal/5 -skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
          Ready to Start Your Study?
        </h2>
        <p className="mx-auto max-w-2xl text-xl text-gray-400 mb-12 font-light">
          Partner with a team that treats your innovation with the precision it deserves.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" size="lg" className="bg-teal text-navy hover:bg-white hover:text-navy w-full sm:w-auto">
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy w-full sm:w-auto">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};