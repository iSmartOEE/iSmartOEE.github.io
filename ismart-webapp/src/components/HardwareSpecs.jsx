import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Monitor, MousePointer, Power } from 'lucide-react';

const HardwareSpecs = () => {
    return (
        <section id="hardware" className="py-20 bg-brand-dark/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-primary/5 skewed-bg"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hardware Integration</h2>
                    <p className="text-slate-400">
                        Engineered for precision. Designed to maintain data integrity and prevent signal corruption.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Port Specs */}
                    <div className="space-y-8">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Power className="text-brand-accent" /> Power & Ports
                            </h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></div>
                                    <span><strong className="text-white">Supply:</strong> 9-24Vdc Industrial Power</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></div>
                                    <span><strong className="text-white">Visual:</strong> Micro HDMI for Local Dashboard</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></div>
                                    <span><strong className="text-white">Network:</strong> LAN & Wi-Fi (Redundant)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></div>
                                    <span><strong className="text-white">Serial:</strong> RS485 (Modbus RTU)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2"></div>
                                    <span><strong className="text-white">USB 2.0:</strong> Scanner, Keyboard, Mouse support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Signal Logic</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-black/20 rounded border border-white/5">
                                    <span className="block text-brand-primary font-bold mb-1">On_cont</span>
                                    <span className="text-xs text-slate-400">Continuous state (Running, Power On)</span>
                                </div>
                                <div className="p-3 bg-black/20 rounded border border-white/5">
                                    <span className="block text-brand-primary font-bold mb-1">On_pulse</span>
                                    <span className="text-xs text-slate-400">Momentary triggers (Count, Event Start)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Terminal Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-primary/20 blur-3xl opacity-20"></div>
                        <div className="relative bg-slate-900 border border-slate-700 rounded-lg p-6 shadow-2xl">
                            <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-700 pb-2">Terminal Block Grid</h4>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex border border-green-500/30 rounded overflow-hidden">
                                    <div className="bg-green-900/20 px-4 py-2 text-green-400 w-24 border-r border-green-500/30 flex items-center">Block 1</div>
                                    <div className="px-4 py-2 bg-slate-800 text-slate-300 flex-1">
                                        <span className="block text-xs text-slate-500 mb-1">Counters</span>
                                        GND, Counter 1, Counter 2, Counter 3, Counter 4
                                    </div>
                                </div>

                                <div className="flex border border-green-500/30 rounded overflow-hidden">
                                    <div className="bg-green-900/20 px-4 py-2 text-green-400 w-24 border-r border-green-500/30 flex items-center">Block 2</div>
                                    <div className="px-4 py-2 bg-slate-800 text-slate-300 flex-1">
                                        <span className="block text-xs text-slate-500 mb-1">Digital Inputs 1-5</span>
                                        GND, Status Monitoring Inputs
                                    </div>
                                </div>

                                <div className="flex border border-green-500/30 rounded overflow-hidden">
                                    <div className="bg-green-900/20 px-4 py-2 text-green-400 w-24 border-r border-green-500/30 flex items-center">Block 3</div>
                                    <div className="px-4 py-2 bg-slate-800 text-slate-300 flex-1">
                                        <span className="block text-xs text-slate-500 mb-1">Digital Inputs 6-9</span>
                                        GND, Manual Event Reporting Triggers
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-700">
                                <div className="flex justify-between items-center text-xs text-slate-500">
                                    <span>Sampling: 200ms</span>
                                    <span>Max Freq: 10kHz</span>
                                    <span>Range: 5V-24V</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HardwareSpecs;
