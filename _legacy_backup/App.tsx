import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Capabilities } from './components/Capabilities';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { LogoStrip } from './components/LogoStrip';

function App() {
  return (
    <div className="min-h-screen bg-white text-navy selection:bg-navy selection:text-white">
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Capabilities />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;