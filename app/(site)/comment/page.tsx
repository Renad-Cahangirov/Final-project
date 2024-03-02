"use client"
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
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
      
         <div className={styles.commentheading}>
           <h2>RƏYLƏR</h2>
          </div>
          <div className={styles.cardContainer}>


            {data.map((comment)=>{
              return(
                <div className={styles.imageDiv}>
                <Image src={comment.image} alt='girl photo' width={131} height={131} />
                <p className={styles.cardTextItems} >{comment.comment}</p>
              </div>
              )
            })}

            


          </div>
        </div>

    </main>
  )
}

export default Comment