import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import {Merienda} from 'next/font/google';
const medienda=Merienda({
  subsets:['latin'],
  weight:['400']
})
const Processpart4 = () => {
  return (
    <main className={`${styles.main} ${medienda.className}`}  >
        <div className={styles.Processpart4}>
      <p className={styles.textthree}>Üyüdülmüş qəhvə</p>
       <Image className={styles.cofebeantwo} src="/cofebeantwo.png" alt="row" width={266} height={266} />
       <Image className={styles.rowthree} src="/rowthree.png" alt='row' width={306} height={337}/>
       
    </div>
    </main>
  )
}

export default Processpart4