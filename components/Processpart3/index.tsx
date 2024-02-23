import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import {Merienda} from 'next/font/google';
const medienda=Merienda({
  subsets:['latin'],
  weight:['400']
})
const Processpart3 = () => {
  return (
    <div className="container">
      <div className={`${styles.processpart3} ${medienda.className}`}>
        <Image className={styles.rowtwo} src="/rowtwo.png" alt="row" width={393} height={332} />
    </div>
    </div>
   
  )
}

export default Processpart3