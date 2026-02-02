import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Boost Production Efficiency with <span className={styles.highlight}>iSmart OEE Ver2</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Intelligent Machine Monitoring Solution. Real-time status tracking, automated OEE calculation, and seamless cloud connectivity for the modern factory.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#features" className={styles.primaryBtn}>
                            Explore Features <ArrowRight size={20} />
                        </Link>
                        <Link href="#contact" className={styles.secondaryBtn}>
                            Request Demo
                        </Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.glow} />
                    <Image
                        src="/ismart_device_hero.png"
                        alt="iSmart OEE Device"
                        width={600}
                        height={400}
                        className={styles.deviceImage}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
