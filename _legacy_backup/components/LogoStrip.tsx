import React from 'react';

export const LogoStrip: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Trusted by Global Leaders</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for logos */}
            <h3 className="text-2xl font-bold text-navy">Medtronic</h3>
            <h3 className="text-2xl font-serif text-navy font-bold">Boston Scientific</h3>
            <h3 className="text-2xl font-sans text-navy font-black tracking-tighter">Edwards</h3>
            <h3 className="text-2xl font-mono text-navy">Abbott</h3>
        </div>
      </div>
    </section>
  );
};