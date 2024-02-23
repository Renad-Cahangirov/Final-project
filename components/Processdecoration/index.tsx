import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
const Processdecoration = () => {
  return (
    <div className="container">
      <div className={styles.Processdecoration}>
        <Image className={styles.cuptwo} src="/cuptwo.png" alt='cup' width={183} height={191}/>
        <Image className={styles.cofe} src="/cofergb.png" alt='cofe' width={246} height={355}/>
        <Image className={styles.cup} src="/cup.png" alt='cup' width={284} height={292}/>
        <Image className={styles.cuper}  src="/cofergb.png" alt='cofe' width={246} height={355}/>
    </div>
    </div>
  )
}

export default Processdecoration