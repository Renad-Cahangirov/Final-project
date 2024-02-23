"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Poppins } from 'next/font/google'
import styles from './style.module.css'


const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
})

const Navbar = () => {
  const path = usePathname();


  const links = [
    { id: 0, to: "/", title: "Ana səhifə" },
    { id: 1, to: "/comment", title: "Rəylər" },
    { id: 2, to: "/products", title: "Məhsullarımız" },
    { id: 3, to: "/about", title: "Haqqında" },
    { id: 4, to: "/contact", title: "Əlaqə" },
  ]

  return (
    <div className={`${styles.navbar} ${poppins.className}`}>
      <div className='container'>

        <div className={styles.headerContainer}>
          <div>
            <Image src="/logo.png" alt="logo" width={148} height={113} />
            <h3 className={styles.navbartext} >JavaJolt Roastres</h3>
          </div>
          <div>
            {links.map(({ id, to, title }) => {
              return (
                <Link className={path === to ? styles.active : ""} href={to} key={id}>
                  {title}
                </Link>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar
