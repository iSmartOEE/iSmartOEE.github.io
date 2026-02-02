import styles from './Specs.module.css';

export default function Specs() {
    return (
        <section id="specs" className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Technical Specifications</h2>

                <div className={styles.tableRef}>
                    <div className={styles.row}>
                        <div className={styles.key}>Input Ports</div>
                        <div className={styles.value}>
                            <ul>
                                <li>2 x Counter Ports (High Speed)</li>
                                <li>9 x Digital Inputs (5 Machine Status + 4 Auxiliary)</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.key}>Communication</div>
                        <div className={styles.value}>
                            <ul>
                                <li>LAN (Ethernet 10/100 Mbps)</li>
                                <li>RS485 (Modbus RTU)</li>
                                <li>USB 2.0 (Data Export/Config)</li>
                                <li>WiFi (Optional)</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.key}>Protocols</div>
                        <div className={styles.value}>
                            <span className={styles.tag}>Modbus TCP</span>
                            <span className={styles.tag}>Modbus RTU</span>
                            <span className={styles.tag}>MQTT</span>
                            <span className={styles.tag}>REST API</span>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.key}>Power Supply</div>
                        <div className={styles.value}>9 - 24 VDC (Industrial Standard)</div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.key}>Display Output</div>
                        <div className={styles.value}>Micro HDMI (for Local Dashboard)</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
