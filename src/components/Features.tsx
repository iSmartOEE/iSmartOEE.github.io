import styles from './Features.module.css';
import { Activity, Calculator, Hash, Cloud } from 'lucide-react';

const features = [
    {
        title: 'Real-time Monitoring',
        description: 'Track machine status instantly with 5 distinct states: Running, Stop, Break, Setup, and Breakdown.',
        icon: Activity,
        color: 'var(--accent-green)'
    },
    {
        title: 'Precise Counting',
        description: 'Accurate product counting for Total, OK, and NG units. Compatible with various sensor inputs.',
        icon: Hash,
        color: '#34d399'
    },
    {
        title: 'Auto OEE Calculation',
        description: 'Automatic calculation of Availability (%A), Performance (%P), Quality (%Q), and overall OEE.',
        icon: Calculator,
        color: '#60a5fa'
    },
    {
        title: 'Cloud & Connectivity',
        description: 'Seamless integration with MQTT, Modbus (TCP/RS485), and REST API. Ready for Grafana dashboards.',
        icon: Cloud,
        color: '#a78bfa'
    }
];

export default function Features() {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Key Features</h2>
                    <p className={styles.subtitle}>Everything you need to optimize your production line.</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper} style={{ backgroundColor: `${feature.color}20` }}>
                                <feature.icon size={32} color={feature.color} />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDesc}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
