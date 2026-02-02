import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Network, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                        </span>
                        <span className="text-sm text-brand-accent font-medium tracking-wide">INDUSTRY 4.0 READY</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                        iSmart <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">OEE</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
                        The ultimate Industrial Gateway bridging legacy machines with digital intelligence.
                        Transform raw pulses into actionable OEE insights.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <a href="#hardware" className="group px-8 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg font-semibold transition-all flex items-center gap-2">
                            Explore Hardware
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#metrics" className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold transition-all backdrop-blur-sm">
                            View Metrics
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                >
                    {[
                        { icon: Cpu, title: 'Edge Computing', desc: 'Real-time calculation of Availability, Performance, and Quality.' },
                        { icon: Zap, title: 'Galvanic Isolation', desc: 'Optocoupler protection against EMI and industrial transients.' },
                        { icon: Network, title: 'Multi-Protocol', desc: 'Seamless Modbus TCP, MQTT, and REST API integration.' },
                    ].map((item, index) => (
                        <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors backdrop-blur-sm">
                            <item.icon className="w-10 h-10 text-brand-primary mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
