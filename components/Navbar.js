import React from 'react'
import Styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div id="navbar" className={Styles.navbar}>
        <a href='/'>Home</a>
        <a href='/about'>about</a>
        <a href='/contact'>contact</a>
        <a href='/signup'>Signup</a>

    </div>
  )
}

export default Navbar