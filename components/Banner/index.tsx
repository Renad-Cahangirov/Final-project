import React from 'react'
import Button from '../Button'
import styles from './style.module.css'
import Image from 'next/image'

const Banner = () => {
  return (
      <section className={styles.bannerSection}>
    <div className="container">
      <div className={styles.banner}>
      <div className="container">
      <div className={styles.bannerContent}>
      <h2>Ən yaxşı sənətkarlıq Qəhvə qovurma təcrübəsi</h2>
      <p>`Mükəmməllik fincanında əylənin`</p>
         <Button title="MAĞAZAYA KEÇ" to="https://www.douglascoffee.com/products/java-jolt" />
         <h3 className={styles.bannerTitle}>Nordic Qəhvə Qovurma Stilində Qeyri-Uçucu Ətraf Mühit Temperaturları</h3>
         <h4>Mükəmməlliyə olan öhdəliyimiz dünyanın hər yerindən eksklüziv plantasiyalardan ən qeyri-adi qəhvə dənələrinin seçilməsi ilə başlayır.</h4>
         <Image className={styles.coffee} src="/cofe.png" alt="logo" width={135} height={184} />
         <Image className={styles.coofe}  src="/coofe.png" alt='kofe' width={71} height={64}/>
         <Image className={styles.cup}   src="/cup.png" alt='cup' width={244} height={252}></Image>
      </div>
      </div>
    </div>
    </div>
      </section>
  )
}

export default Banner   