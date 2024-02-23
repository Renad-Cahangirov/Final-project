import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { data } from '@/data'
const Comment = () => {
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