import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import {Poppins} from 'next/font/google';
const poppins=Poppins({
  subsets:['latin'],
  weight:['400']
})
const Paket = () => {
  return (
<main className={`${styles.mainPaket} ${poppins.className}`}>
<div className="container">
        <div className={styles.paket}>
        <div className={styles.photo}>
        <Image src="/logotwo.png" alt="logo" width={148} height={113} />
            <h3>JavaJolt Roastres</h3>
        </div>
        <div className={styles.text}>
            <p className={styles.pakettext}>
            Sizi dəbdəbə və incəlikdən ibarət valehedici səyahətə çıxmağa dəvət edir. Qəhvə təcrübənizi yeni zirvələrə yüksəldin və qeyri-adi qovurma sənətinə qərq olun. Möhtəşəm kolleksiyamızı araşdırın və hisslərinizi qəhvə mükəmməlliyinin əsl mahiyyətinə oyatmağa imkan verin. Qeyri-adi qəhvəyə olan ehtirasınızı sərbəst buraxın və qəhvə ritualınızı əbədi olaraq yenidən təyin edəcək bənzərsiz incəlik aləmini kəşf edin.
            </p>
        </div>
         </div>
    </div>
</main>
  )
}

export default Paket