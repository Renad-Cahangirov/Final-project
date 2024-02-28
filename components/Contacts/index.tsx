import React from 'react'
import styles from './styles.module.css'
const Contacts = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.Contactsheading}>
          <h2>ƏLAQƏ</h2>
        </div>
 
      <form className={styles.input} action="https://getform.io/f/zbqGjkep" method='POST'> 


      <div className={styles.twolabel}>
      <label className={styles.all} htmlFor="all">
      Ad və soyad <br /> <br /> <input type='text' name=''/><br />
      </label>
       
       <label className={styles.email} htmlFor="email"><br />
       Email <br /> <br /> <input type="email" name='emailInput' id='emailInput' />
       </label>
      </div>
      <p className={styles.mesaj} >Mesaj</p>
       <br /> <textarea className={styles.textarea} name="text" id="text" cols="60" rows="8"></textarea> <br />
         <button  className={styles.button} type='submit'>Göndər</button>
       </form>
      

      </div>
    </main>
  )
}

export default Contacts