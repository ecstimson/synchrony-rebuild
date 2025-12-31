import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Capabilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3]">
              <div className="absolute inset-0 bg-lab-pattern bg-cover bg-center rounded-sm"></div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-navy/10 -z-10"></div>
              <div className="absolute top-12 -left-12 bg-navy p-8 hidden md:block shadow-xl">
                 <div className="text-white text-4xl font-bold">20+</div>
                 <div className="text-teal text-sm font-bold uppercase tracking-widest mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-teal font-bold uppercase tracking-[0.2em] mb-4 text-sm">World-Class Facilities</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 uppercase leading-tight">
              State-of-the-art <br/> Lab Environments
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our 20,000 sq. ft. facility is designed to replicate clinical environments, ensuring your device is tested under the most realistic conditions possible.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Dual Cath Labs with Philips Azurion Systems",
                "Dedicated Surgical Operating Suites",
                "Advanced Imaging (CT, Fluoroscopy, ICE)",
                "AAALAC Accredited & GLP Compliant"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-ghost flex items-center justify-center rounded-full text-teal">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-navy font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary">
              Tour Our Facility
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};