"use client"
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '@/data'
import AOS from "aos";
import "aos/dist/aos.css"
const Comment = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main>
      <div className="container">
        <div className={styles.cardContainer}>
          {
            data.slice(0,2).map((comm)=>{
              return(
                <div key={comm.id} data-aos="flip-up" className={styles.imageDiv}>
            <Image src={comm.image} alt='girl photo' width={131} height={131} />
            <p className={styles.cardTextItems} >{comm.comment}</p>
          </div>


         
              )
            })
          }

        </div>
      <Link className={styles.linktwo} href='/comment'>DAHA ÇOX</Link>
      </div>
    </main >
  )
}

export default Comment