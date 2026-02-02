import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OEEMetrics from './components/OEEMetrics';
import HardwareSpecs from './components/HardwareSpecs';
import Connectivity from './components/Connectivity';
import DataLogging from './components/DataLogging';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 selection:bg-brand-primary/30">
      <Navbar />
      <main>
        <Hero />
        <OEEMetrics />
        <HardwareSpecs />
        <Connectivity />
        <DataLogging />
      </main>
      <Footer />
    </div>
  );
}

export default App;
