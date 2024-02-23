import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import {Merienda} from 'next/font/google';
const medienda=Merienda({
  subsets:['latin'],
  weight:['400']
})
const Processpart5 = () => {
  return (
   <div className="container">
     <div className={`${styles.Processpart5} ${medienda.className}`}>
       <Image className={styles.cofecup} src="/cofecup.png" alt='cup' width={354} height={354}/>
       <p className={styles.textfour} >Təzə qovrulmuş dənə ən yaxşı fincan qəhvə hazırlanır</p>
    </div>
   </div>
  )
}

export default Processpart5