import React from 'react';
import { Logo } from './ui/Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo theme="dark" />
            <p className="text-gray-400 leading-relaxed text-sm">
              Accelerating medical device innovation through superior preclinical research and GLP testing services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-teal">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-teal">Services</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Cardiovascular</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Neurovascular</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pathology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Physician Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-teal">Contact</h4>
            <ul className="space-y-6 text-sm text-gray-300">
              <li className="flex items-start gap-4">
                <MapPin className="shrink-0 text-teal" size={20} />
                <span>123 Innovation Drive,<br/>Research Triangle Park, NC</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="shrink-0 text-teal" size={20} />
                <span>+1 (800) 555-0123</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="shrink-0 text-teal" size={20} />
                <span>inquire@synchronylabs.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; 2025 Synchrony Labs. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};