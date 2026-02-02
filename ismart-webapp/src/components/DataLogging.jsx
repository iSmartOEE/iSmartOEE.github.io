import React from 'react';
import { FileText, Download, Save, Database } from 'lucide-react';

const DataLogging = () => {
    return (
        <section id="data" className="py-20 bg-brand-secondary/20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Data Persistence & Export</h2>
                        <p className="text-slate-400 mb-8">
                            Historical data persistence is fundamental for root-cause analysis and continuous improvement audits.
                            The system ensures standardized logging and flexible retrieval methods.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-brand-primary/20 p-3 rounded-lg h-fit">
                                    <FileText className="text-brand-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Automated CSV Logging</h4>
                                    <p className="text-slate-400 text-sm">Locally stored files with strict naming conventions:</p>
                                    <ul className="mt-2 space-y-1 text-xs font-mono text-slate-500">
                                        <li>LogEvent_YYYYMMDD.csv</li>
                                        <li>Summary_YYYYMMDD.csv</li>
                                        <li>LogProductOK_YYYYMMDD.csv</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-brand-accent/20 p-3 rounded-lg h-fit">
                                    <Download className="text-brand-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Flexible Retrieval</h4>
                                    <p className="text-slate-400 text-sm">Three primary methods for accessing your data:</p>
                                    <ul className="mt-2 space-y-1 text-sm text-slate-400">
                                        <li>1. <span className="text-white">FTP:</span> Automated bulk downloading.</li>
                                        <li>2. <span className="text-white">Local UI:</span> Quick "Select & Copy" from Dashboard.</li>
                                        <li>3. <span className="text-white">Direct Export:</span> Save to Excel/CSV formats.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-xl border border-slate-700 p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>

                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Database className="w-5 h-5 text-brand-primary" />
                            Event Report Workflow
                        </h3>

                        <div className="relative border-l-2 border-slate-700 ml-3 space-y-8 pl-8 pb-4">
                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-800 border-2 border-brand-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold">1</span>
                                <h4 className="text-white font-bold text-sm">Event Trigger</h4>
                                <p className="text-xs text-slate-500 mt-1">Machine Breakdown or Manual Input (DI 6-9)</p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-800 border-2 border-brand-accent rounded-full flex items-center justify-center text-[10px] text-white font-bold">2</span>
                                <h4 className="text-white font-bold text-sm">Operator Input</h4>
                                <p className="text-xs text-slate-500 mt-1">Scan Barcode / Select Cause & User</p>
                                <div className="mt-2 inline-block bg-red-900/30 text-red-400 text-[10px] px-2 py-1 rounded border border-red-900/50">
                                    Critical: Must complete within 4:38 mins
                                </div>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 bg-slate-800 border-2 border-green-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">3</span>
                                <h4 className="text-white font-bold text-sm">Sync & Log</h4>
                                <p className="text-xs text-slate-500 mt-1">Database synchronization & CSV generation</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default DataLogging;
