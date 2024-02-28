import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '@/data'
const Comment = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.cardContainer}>
          {
            data.slice(0,2).map((comm)=>{
              return(
                <div className={styles.imageDiv}>
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