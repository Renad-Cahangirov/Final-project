import Link from 'next/link'
import { title } from 'process'
import React from 'react'
import styles from './style.module.css'
interface IButton {
    title:string
    to:string
}

const Button = ({title,to,}:IButton) => {
  return (
<Link className={styles.btn} target='_blank' href={to}>{title}</Link>
  )
}

export default Button