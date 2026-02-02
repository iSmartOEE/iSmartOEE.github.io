import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Clock, BarChart2, Activity } from 'lucide-react';

const MetricCard = ({ title, symbol, desc, logic, color, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group"
    >
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className="text-white w-6 h-6" />
        </div>
        <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-2xl font-mono font-bold text-gray-400">{symbol}</span>
        </div>
        <p className="text-slate-400 text-sm mb-4 min-h-[40px]">{desc}</p>
        <div className="bg-black/30 p-3 rounded text-xs font-mono text-slate-300 border border-white/5">
            <span className="text-gray-500">Logic:</span> {logic}
        </div>
    </motion.div>
);

const OEEMetrics = () => {
    return (
        <section id="metrics" className="py-20 bg-brand-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Core Performance Metrics
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Calculated in real-time based on the industry-standard pillars of manufacturing health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MetricCard
                        title="Availability"
                        symbol="%A"
                        desc="Actual vs. Planned production time."
                        logic="5 Status Machine Registers"
                        color="bg-blue-500"
                        icon={Clock}
                        delay={0.1}
                    />
                    <MetricCard
                        title="Performance"
                        symbol="%P"
                        desc="Actual speed vs. Standard cycle time."
                        logic="Std. Cycle Time / Total Count"
                        color="bg-emerald-500"
                        icon={Activity}
                        delay={0.2}
                    />
                    <MetricCard
                        title="Quality"
                        symbol="%Q"
                        desc="Yield of 'OK' units vs. total produced."
                        logic="OK / NG Counter Registers"
                        color="bg-purple-500"
                        icon={PieChart}
                        delay={0.3}
                    />
                    <MetricCard
                        title="OEE Score"
                        symbol="%OEE"
                        desc="Total effective equipment productivity."
                        logic="Composite (%A x %P x %Q)"
                        color="bg-pink-500"
                        icon={BarChart2}
                        delay={0.4}
                    />
                </div>

                <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Functional Logic</h3>
                    <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-400">
                        <div>
                            <h4 className="text-brand-primary font-semibold mb-2">Machine State Monitoring</h4>
                            <p>The system distinguishes 5 distinct states: <span className="text-white">On/Off, Running, Minor Stop, Break Down, and Break</span>. Availability (%A) is derived directly from these states.</p>
                        </div>
                        <div>
                            <h4 className="text-brand-primary font-semibold mb-2">Planning Parameters</h4>
                            <p>Performance (%P) relies on pre-defined configuration: Work Plan (07:30-16:30), Break Plan, Standard Cycle Time, and Target Count.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OEEMetrics;
