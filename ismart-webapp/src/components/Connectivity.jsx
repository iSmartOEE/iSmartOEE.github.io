import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Smartphone } from 'lucide-react';

const Connectivity = () => {
    return (
        <section id="connectivity" className="py-20 bg-brand-dark px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ecosystem Architecture</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Seamless interoperability between factory floor pulses and enterprise cloud decision making.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Lines (Desktop only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">

                        {/* Stage 1: Machine Level */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 border border-slate-700 p-8 rounded-xl flex flex-col items-center text-center shadow-lg"
                        >
                            <div className="bg-slate-800 p-4 rounded-full mb-6 relative">
                                <Server className="w-10 h-10 text-blue-400" />
                                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Machine Layer</h3>
                            <p className="text-slate-400 text-sm mb-4">Modbus TCP Slave</p>
                            <div className="w-full text-left space-y-2 text-xs font-mono text-slate-500 bg-black/20 p-4 rounded">
                                <div className="flex justify-between"><span>Status Registers:</span> <span className="text-slate-300">5 Mapped</span></div>
                                <div className="flex justify-between"><span>Count Registers:</span> <span className="text-slate-300">OK, NG, Total</span></div>
                            </div>
                        </motion.div>

                        {/* Stage 2: Gateway/Cloud */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 border border-brand-primary/50 p-8 rounded-xl flex flex-col items-center text-center shadow-lg shadow-brand-primary/10"
                        >
                            <div className="bg-gradient-to-br from-brand-primary to-brand-accent p-4 rounded-full mb-6">
                                <Cloud className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">IoT Cloud (Netpie)</h3>
                            <p className="text-slate-400 text-sm mb-4">Bifurcated Data Flow</p>
                            <div className="space-y-3 w-full">
                                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded text-sm text-blue-300">
                                    <strong className="block text-xs uppercase opacity-70 mb-1">Push (Telemetry)</strong>
                                    MQTT Real-time Events
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded text-sm text-purple-300">
                                    <strong className="block text-xs uppercase opacity-70 mb-1">Receive (Config)</strong>
                                    REST API Parameters
                                </div>
                            </div>
                        </motion.div>

                        {/* Stage 3: User/Enterprise */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 border border-slate-700 p-8 rounded-xl flex flex-col items-center text-center shadow-lg"
                        >
                            <div className="bg-slate-800 p-4 rounded-full mb-6">
                                <Smartphone className="w-10 h-10 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Visualization</h3>
                            <p className="text-slate-400 text-sm mb-4">Mobile & Desktop</p>
                            <ul className="text-sm text-slate-400 space-y-2">
                                <li className="flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Wait-time Dashboard
                                </li>
                                <li className="flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    NECTEC Grafana Monitoring
                                </li>
                                <li className="flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Event Report Mobile UI
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connectivity;
