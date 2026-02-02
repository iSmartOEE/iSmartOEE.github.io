'use client';
import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        <Cpu className={styles.logoIcon} />
                        <span>iSmart OEE</span>
                    </Link>

                    <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                        <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
                        <Link href="#dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                        <Link href="#specs" onClick={() => setIsOpen(false)}>Specs</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>

                    <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
