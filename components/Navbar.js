import React from 'react'
import Styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div id="navbar" className={Styles.navbar}>
        <Link href='/'>Home</Link>
        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
        <Link href='/signup'>Signup</Link>

    </div>
  )
}

export default Navbar