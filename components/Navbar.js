import React from 'react'
import Styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className={Styles.navbar}>
        <div className={Styles.navlogo}>
          <Link href={'/'}><Image className={Styles.logo} height={1500} width={935} src='/mainlogo.png' alt="mainlogo" /></Link>
          <Link href={"/"}><span>EorNex</span></Link>
        </div>
        <div className={Styles.navlist}>
          <Link href='/signup'><span>Top Trending</span></Link>
          <Link href='/'><span>Bset Picks</span></Link>
          <Link href='/'><span>Smart Devices</span></Link>
          <Link href='/'><span>Gadgets</span></Link>
          <Link href='/'><span>News</span></Link>
          <Link href='/'><span>Innovations</span></Link>
          <Link href='/'><span>Category</span></Link>
        </div>

        <div className={Styles.navright}>
          <label htmlFor='nocheck'>
            <div className={Styles.searchbar}><IoIosSearch /></div>
          </label>
          <input type='checkbox' id={Styles.check} />
          <label htmlFor={Styles.check}>
            <div className={Styles.menubar}><FaBars /></div>
            <div className={Styles.menuclose}><FaWindowClose /></div>
          </label>
          <div className={Styles.sidebar}>
            <div className={Styles.sidelog}>
              <div className={Styles.logtext}>
                <h2>innovate - EorNex</h2>
                <p>Explore, Discover, Redefine</p>
              </div>
              <div className={Styles.loglogo}>
                <Image className={Styles.logimg} height={1500} width={935} src='/mainlogo.png' alt="mainlogo" />
              </div>
            </div>
            <div className={Styles.sidelist}>
              <Link href='/'><p>Top Trending</p></Link>
              <Link href='/signup'><p>Bset Picks</p></Link>
              <Link href='/signup'><p>Smart Devices</p></Link>
              <Link href='/about'><p>Gadgets</p></Link>
              <Link href='/signup'><p>News</p></Link>
              <Link href='/contact'><p>Innovations</p></Link>
              <Link href='/signup'><p>Category</p></Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar