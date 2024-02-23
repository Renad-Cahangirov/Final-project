import React from 'react'
import styles from './styles.module.css'
const register = () => {
  return (
   <main>
    <div className="container">
    

        <div className={styles.register}>

        <h6 className={styles.heading} >QEYDİYYATDAN KEÇİN</h6>

        <form className={styles.input} method='POST'>
         <p className={styles.name} >İstifadəçi adı</p>
         <input className={styles.inputtwo} type="text" /><br /><br />

         <p className={styles.email} >Email</p>
         <input  className={styles.inputtwo} type="text" /><br /><br />

         <p className={styles.pasword} >Şifrə</p>
         <input className={styles.inputtwo} type="text" /><br />
        
         <button  className={styles.button} type='submit'>Göndər</button>

        </form>
        </div>
    </div>
   </main>
  )
}

export default register