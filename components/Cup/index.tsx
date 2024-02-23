import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Cups = () => {
    return (
        <main>
            <div className="container">
                <div className={styles.Footerheading}>
                    <h2>KOFE SİZİN TƏZƏRİNİZİ TƏRƏF EDİN</h2>
                </div>
                <div className={styles.divone}>
                    <Image className={styles.divone} src='/talehcup.png' alt='cofe cup' width={1306} height={811} />
                </div>

                <div className={styles.links}>
                    <Link className={styles.linkone} href='/register'>Qeydiyyatdan Keçin</Link>
                    <Link className={styles.linktwo} href='/'>Abunə ol</Link>

                </div>
            </div>
        </main>
    )
}

export default Cups