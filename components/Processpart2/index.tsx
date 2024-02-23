import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import {Merienda} from 'next/font/google';
const medienda=Merienda({
  subsets:['latin'],
  weight:['400']
})
const Processpart2 = () => {
  return (
   <div className="container">
    <div className={`${styles.Processpart2} ${medienda.className}`}>
    <div className={styles.divtwo}>
    <p className={styles.texttwo}>Onlar qovurma prosesindən keçirlər</p>
    <Image className={styles.cofebean} src="/cofebean.png" alt='cofebean' width={240} height={240}></Image>
  
   </div>
   </div>
   </div>
  )
}

export default Processpart2