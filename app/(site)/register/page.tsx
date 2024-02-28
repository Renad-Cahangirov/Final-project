import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
const register = () => {
  return (
   <main className={styles.main}>
    <div className="container">
     <div className={styles.register}>


    <h6 className={styles.heading} >QEYDİYYATDAN KEÇİN</h6>


    <form className={styles.input} action="https://getform.io/f/mepEQyaM"  method='POST'>
    <p className={styles.name} >İstifadəçi adı</p>
    <input className={styles.inputtwo} type="text" /><br /><br />

    <p className={styles.email} >Email</p>
    <input  className={styles.inputtwo} type="text" /><br /><br />

    <p className={styles.pasword} >Şifrə</p>
    <input className={styles.inputtwo} type="text" /><br />

    </form>
    <button  className={styles.button} type='submit'>Göndər</button>
    </div>
     
       
    </div>
   </main>
  )
}

export default register