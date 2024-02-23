import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'
const Popularproduct = () => {
  return (
    <div className="container">
       <div className={styles.Popularproduct}>
        <div className={styles.Productheading}>
            <h2>POPULYAR MƏHSULLARIMIZ</h2>
        </div>
        <section className={styles.card}>
          <div className={styles.cardContainer}>
          <div className={styles.cards}>
          <div className={styles.imageDiv}>
          <Image className={styles.cardImage} src="/coffeepacket.png" alt='cofe packet' width={269} height={269}/>
          </div>
          <p className={styles.imageText} >TESTY COFFEE STIMY</p>
          </div>
          
           <div className={styles.cards}>
           <div className={styles.imageDiv}>
           <Image className={styles.cardImage}src="/coffeepackettwo.png" alt='cofe packet' width={269} height={269}/>
           </div>
           <p className={styles.imageText} > AMERICANO PURE</p>
           </div>
           
          <div className={styles.cards}>
          <div className={styles.imageDiv}>
          <Image className={styles.cardImage} src="/coffeepacketthree.png" alt='cofe packet' width={269} height={269}/>
          </div>
          <p className={styles.imageText}>INDIAN ROASTING</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.imageDiv}>
            <Image className={styles.cardImage} src='/coffeepacketfour.png' alt='cofe packet' width={269} height={269}/>
            </div>
            <p className={styles.imageText}>BANGLADESHI ORGANIC</p>
          </div>  

          
          <div className={styles.cards}>
            <div className={styles.imageDiv}>
            <Image className={styles.cardImage} src="/coffeepacketfive.png" alt='cofe packet' width={269} height={269}/>
            </div>
            <p className={styles.imageText}>
            ARVICA COFFEE PACK        
            </p>
          </div>
          </div>
          
        </section>
       </div>
       <Link className={styles.linktwo} href='/products' >ƏTRAFLI</Link>
    </div>
  )
}

export default Popularproduct