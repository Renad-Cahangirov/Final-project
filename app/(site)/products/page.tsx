import React from 'react'
import styles from './styles.module.css'
import { divtwo } from '@/datatwo'
import Image from 'next/image'
const Mehsullar = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.cardContainer}>

<div className={styles.productsheading}>
  <h2>MƏHSULLARIMIZ</h2>
</div>


          {divtwo.map((products) => {
            return (
             <div key={products.id} className={styles.work}>
                <div className={styles.imageDiv}>
                  <Image className={styles.cardImage} src={products.image} alt='photo' width={269} height={269} />
                </div>
                <p className={styles.imageText} >{products.title}</p>
                </div>
            )
          }
          )}


        </div>
      </div>
    </main >
  )
}

export default Mehsullar