import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footers = () => {
  return (
    <main>
        <div className="container">
            <div className={styles.divone}>
            <Image className={styles.reklam} src='/renadcup.png' alt='cup' width={1306} height={611}/>
            </div>
            <div className={styles.divtwo}>
            <Image src="/logotwo.png" alt="logo" width={246} height={203} />
            <h3 className={styles.textone}>JavaJolt Roastres</h3>
            </div>
            <div className={styles.divthree}>
              <Link target='_blank' href='https://www.facebook.com/' >
              <Image src='/Facebook - Original.png' alt='facebook logo' width={48} height={48}/>
              </Link>

             <Link target='_blank' href='https://twitter.com/?lang=en'>
             <Image src='/Twitter - Original.png' alt='twitter logo' width={48} height={48}/>
             </Link>

              <Link target='_blank' href='https://www.instagram.com/'>
              <Image src='/Instagram - Original.png' alt='instagram logo' width={48} height={48}/>
              </Link>

              <Link target='_blank' href='https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=googl&gs_lcrp=EgZjaHJvbWUqDQgCEC4YxwEY0QMYgAQyDggAEEUYJxg7GIAEGIoFMgYIARBFGDsyDQgCEC4YxwEY0QMYgAQyBggDEEUYQTIGCAQQRRhBMgYIBRBFGDwyBggGEAUYQDIGCAcQRRhB0gEINDAyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' >
              <Image src='/Google - Original.png' alt='google logo' width={48} height={48}/>
              </Link>

              <Link target='_blank' href='https://www.youtube.com/' >
              <Image src='/YouTube - Original.png' alt='youtube logo' width={48} height={48}/>
              </Link>
              
            </div>

          <div className={styles.contact}>
           <div className={styles.heading} >
            <h4>ƏLAQƏ</h4>
           </div>
           <div className={styles.divicon}>
             <Image src='/icon.png' alt='icon' width={40} height={40}/>
           </div>

           <div className={styles.location}>
            <Link className={styles.locationtwo} target='_blank' href="https://www.google.com/maps/search/4140+Parker+Rd.+Allentown,+New+Mexico+31134/@34.9727431,-105.0323351,20.44z?entry=ttu">
            4140 Parker Rd. <br /> Allentown, New <br /> Mexico 31134
            </Link>
           </div>
  
          <div className={styles.divicontwo}>
            <Image src='/phone.png' alt='icon' width={36} height={36} />
          </div>
 
        <div className={styles.phone}>
         <Link className={styles.phonetwo} href="tel:(319) 555-0115">(319) 555-0115"</Link>
        </div>

          </div>

        </div>

    </main>
  )
}

export default Footers