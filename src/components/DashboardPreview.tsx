"use client";
import styles from './DashboardPreview.module.css';

export default function DashboardPreview() {
    return (
        <section id="dashboard" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Real-time Dashboard</h2>
                    <p className={styles.subtitle}>
                        Monitor your production lines from anywhere with our web-based and local display interfaces.
                    </p>
                </div>

                <div className={styles.dashboardContainer}>
                    <div className={styles.dashboardHeader}>
                        <span className={styles.statusBadge}>Status: <span className={styles.running}>RUNNING</span></span>
                        <span className={styles.time}>10:42 AM</span>
                    </div>

                    <div className={styles.mainMetrics}>
                        <div className={styles.metricCard}>
                            <h3>Availability (A)</h3>
                            <div className={styles.gauge}>
                                <svg viewBox="0 0 36 36" className={styles.circularChart}>
                                    <path className={styles.circleBg}
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className={styles.circle}
                                        strokeDasharray="92, 100"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                </svg>
                                <div className={styles.percentage}>92%</div>
                            </div>
                        </div>

                        <div className={styles.metricCard}>
                            <h3>Performance (P)</h3>
                            <div className={styles.gauge}>
                                <svg viewBox="0 0 36 36" className={styles.circularChart}>
                                    <path className={styles.circleBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className={styles.circle} strokeDasharray="85, 100" stroke="#34d399" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className={styles.percentage}>85%</div>
                            </div>
                        </div>

                        <div className={styles.metricCard}>
                            <h3>Quality (Q)</h3>
                            <div className={styles.gauge}>
                                <svg viewBox="0 0 36 36" className={styles.circularChart}>
                                    <path className={styles.circleBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className={styles.circle} strokeDasharray="99, 100" stroke="#60a5fa" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className={styles.percentage}>99%</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.totalOEE}>
                        <h3>Overall OEE</h3>
                        <div className={styles.oeeValue}>77.4%</div>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: '77.4%' }}></div>
                        </div>
                    </div>

                    <div className={styles.counters}>
                        <div className={styles.counterBox}>
                            <span className={styles.label}>Total</span>
                            <span className={styles.value}>1,240</span>
                        </div>
                        <div className={styles.counterBox}>
                            <span className={styles.label}>OK</span>
                            <span className={styles.valueOk}>1,228</span>
                        </div>
                        <div className={styles.counterBox}>
                            <span className={styles.label}>NG</span>
                            <span className={styles.valueNg}>12</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
