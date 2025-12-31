import React from 'react';
import { Activity, Microscope, BrainCircuit, Syringe, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  {
    title: 'Interventional Cardiology',
    description: 'Expert preclinical testing for stents, balloons, and structural heart devices utilizing advanced imaging guidance.',
    icon: Activity,
  },
  {
    title: 'Electrophysiology',
    description: 'Comprehensive mapping and ablation study capabilities with state-of-the-art recording systems.',
    icon: BrainCircuit,
  },
  {
    title: 'Pathology Services',
    description: 'Full-service histology and pathology laboratory delivering rapid, high-quality tissue analysis.',
    icon: Microscope,
  },
  {
    title: 'Drug Delivery',
    description: 'Specialized protocols for drug-eluting technologies and pharmacokinetic distribution studies.',
    icon: Syringe,
  },
  {
    title: 'Surgical Training',
    description: 'Bioskills labs designed for physician training, device demonstrations, and R&D capability.',
    icon: HeartHandshake,
  },
  {
    title: 'Regulatory Support',
    description: 'GLP-compliant data reporting and study design to support global regulatory submissions.',
    icon: ShieldCheck,
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-ghost">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-navy mb-4 tracking-tight uppercase">
              Comprehensive <span className="text-teal">Research Areas</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We provide the infrastructure and expertise to accelerate your medical device from concept to clinical reality.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View All Capabilities
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 relative overflow-hidden border-t-4 border-transparent hover:border-teal"
            >
              <div className="mb-8 relative z-10">
                <service.icon className="w-12 h-12 text-navy group-hover:text-teal transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-4 uppercase tracking-wide group-hover:text-teal transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-navy mt-auto">
                <span className="border-b border-gray-300 group-hover:border-teal pb-1 transition-colors">
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};