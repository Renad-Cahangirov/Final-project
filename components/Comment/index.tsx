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

          {/* <div className={styles.imageDiv}>
            <Image src='/girlphoto.png' alt='girl photo' width={131} height={131} />
            <p className={styles.cardTextItems} >Swag paketini aldım! Çox sağ ol! Buradakı hər kəsin sınaması üçün bu gün qəhvədən dəmlədik. Məncə, əladır! Bütün həftə sonu (ikinci işimdə) işlədim, ona görə də bu səhər işə başlamağa çox ehtiyacım var idi!!”</p>
          </div>
          <div className={styles.imageDiv}>
            <Image src='/manphoto.png' alt='manphoto' width={131} height={131} />
            <p className={styles.cardTextItems} >Qəhvəniz buradakı yoldaşlar arasında böyük bir hitdir. Hər səhər istəyənlər üçün bir qazan və ya 2 qazan düzəldirəm. Bu, indiyə qədər içdiyim ən dadlı qəhvədir.</p>
          </div> */}

        </div>
      <Link className={styles.linktwo} href='/comment'>DAHA ÇOX</Link>
      </div>
    </main >
  )
}

export default Comment