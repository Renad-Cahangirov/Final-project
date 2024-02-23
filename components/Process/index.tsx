import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import {Merienda} from 'next/font/google';
const medienda=Merienda({
  subsets:['latin'],
  weight:['400']
})
import {Jomhuria} from 'next/font/google';
const jomhuria=Merienda({
  subsets:['latin'],
  weight:['400']
})
const Process = () => {
  return (
    <div className="container">
      <div className={`${styles.Process} ${medienda.className}`}>
        <div className={styles.processContent}>
            <h2 className={`${styles.text} ${jomhuria.className}`}>PROSES</h2>
             
             <div className={styles.divone}>
             <Image className={styles.elipse} src="/elipse.png" alt='cofebean' width={252} height={252}></Image>
          <p className={styles.textone}>Dənə qəhvə albalısının toxumlarıdır</p>
             </div>
             <div className={styles.row}>
              <Image className={styles.rowone} src="/rowone.png" alt='row' width={485} height={468}></Image>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Process