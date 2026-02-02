import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>iSmart OEE</h3>
                        <p>Empowering Industry 4.0 with intelligent monitoring.</p>
                    </div>

                    <div className={styles.links}>
                        <h4>Product</h4>
                        <a href="#features">Features</a>
                        <a href="#dashboard">Dashboard</a>
                        <a href="#specs">Specifications</a>
                    </div>

                    <div className={styles.contact}>
                        <h4>Contact Us</h4>
                        <p>Email: sales@ismart-oee.com</p>
                        <p>Tel: +66 2 123 4567</p>
                        <p>Bangkok, Thailand</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} iSmart OEE Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
