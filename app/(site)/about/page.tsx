import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import {Poppins} from 'next/font/google';
const poppins=Poppins({
  subsets:['latin'],
  weight:['400']
})
const about = () => {
  return (
   
    <main>
      <div className="container">
        <h2 className={styles.aboutheading}> HAQQIMIZDA </h2>
        <Image className={styles.aboutcofe} src='/aboutcofe.jpg' alt='cofe shop' width={600} height={370}/>
        <p className={styles.textone} >Hər şey 2002-ci ildə Utikanın nisbətən iqtisadi cəhətdən depressiyaya məruz qalmış bölgəsində Genesee Street yerimizin alınması ilə başladı. Təkcə bu məkanın deyil, bütün ərazinin potensialını təsisçimiz və prezidentimiz Frank Elias gördü. <br />
        Problemi həll etmək üçün başqa bir fürsət, bölgədəki insanlara işə başlamaq və irəliləmək üçün iş vermək idi! 2005-ci ildə dünyanın ən yüksək keyfiyyətli qəhvəsini əldə etmək və qovurmağa başlamaq məqsədi ilə bu binaya qovurma maşını köçürüldü. Bu zaman keçdikcə partnyor Heather Eliasın vizyonu ilə məşğul və səs-küylü kafeyə çevrildi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error fuga, ea cupiditate minima maiores voluptatum nesciunt soluta impedit eum. Ab inventore doloribus recusandae quam ea? Velit obcaecati </p>

        <p className={styles.texttwo}>Bu gün Utica Coffee Roasting, Genesee Street-in ilkin yerindən çox daha çox hala gəldi. Utica & Clinton-da kafelər, Hotel Street-də dünya səviyyəli qovurma və təhsil mərkəzimiz və Utica-da tarixi yük evində istehsal obyekti; Utica Coffee brendinin cəmiyyətimizin əsas məhsuluna çevrildiyini söyləmək təhlükəsizdir.

       Biz yerli olaraq işə götürməklə, yerli bizneslərlə əməkdaşlıq etməklə və müxtəlif yerli məhsullar üçün pərakəndə satış sahəsi təmin etməklə öz köklərimizə sadiq qalırıq. Utica Coffee məhsulları öz evlərini vebsaytımızda və Amazonda tapır. Biz həmçinin kofemizin Nyu-York ştatının bütün ştatlarında satılmasından və təqdim edilməsindən qürur duyuruq.</p>


      <Image className={styles.aboutcofetwo} src='/aboutphototwo.jpeg' alt='cofe photo' width={600} height={370}/>

      </div>
    </main>
  
  )
}

export default about