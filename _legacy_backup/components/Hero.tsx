import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-navy">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
        {/* Heavy Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-3 py-1 border border-teal/50 rounded-sm">
            <span className="text-teal text-xs font-bold tracking-[0.2em] uppercase">
              Preclinical Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight uppercase text-balance">
            Advancing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-white">Medical</span> <br/>
            Innovation
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
            Synchrony Labs provides world-class GLP preclinical research services, specializing in interventional cardiology and structural heart technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button variant="primary" className="bg-teal text-navy hover:bg-white hover:text-navy border-0">
              Explore Services
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy">
              View Facilities
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-teal via-navy to-navy"></div>
    </section>
  );
};