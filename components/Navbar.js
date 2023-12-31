import React, { useState } from 'react'
import Styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
const Navbar = () => {
  const [searchdrop, setsearchdrop] = useState(false)
  const [smlinks, setsmlinks] = useState(false)
  return (
    <>
      <div className={Styles.navbar}>
        <div className={Styles.navlogo}>
          <Link href={'/'}><Image className={Styles.logo} height={1500} width={935} src='/mainlogo.png' alt="mainlogo" /></Link>
          <Link href={"/"}><span>EorNex</span></Link>
        </div>
        <div className={Styles.navlist}>
          <Link href='/toptrend'><span>Top Trending</span></Link>
          <Link href='/bestpicks'><span>Bset Picks</span></Link>
          <Link href={'#'} onMouseOver={() => { setsmlinks(true) }} onMouseLeave={() => { setsmlinks(false) }}><span id={Styles.smartbar}>Smart Devices</span></Link>

          <div onMouseOver={() => { setsmlinks(true) }} onMouseLeave={() => { setsmlinks(false) }} className={smlinks === false ? Styles.smartlinksoff : Styles.smartlinks}>
            <ul>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/watchblog/Apple%20Watch%20Series%209'}><span>Apple Watch Series 9</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/watchblog/Apple%20Watch%20Ultra%202'}><span>Apple Watch Ultra 2</span><FaAngleRight className={Styles.sideicons} /></Link></li>
            </ul>
            <ul>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsug</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
            </ul>
            <ul>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsug</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
            </ul>
            <ul>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsug</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
              <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
            </ul>
          </div>


          <Link href='/gadgets'><span>Gadgets</span></Link>
          <Link href='/news'><span>News</span></Link>
          <Link href='/innovations'><span>Innovations</span></Link>
          <Link href='/category'><span>Category</span></Link>
        </div>

        <div className={Styles.navright}>
          <label htmlFor='nocheck'>
            <div onMouseOver={() => { setsearchdrop(true) }} onMouseLeave={() => { setsearchdrop(false) }} className={Styles.searchbar}><IoIosSearch /></div>
            <div onMouseOver={() => { setsearchdrop(true) }} onMouseLeave={() => { setsearchdrop(false) }} className={searchdrop === false ? Styles.searchinputone : Styles.searchinput}>
              <input type='text' placeholder='search here' />
              <p><IoIosSearch /></p>
            </div>
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
              <Link className={Styles.sideclose} href='/toptrend'><p>Top Trending</p></Link>
              <Link href='/bestpicks'><p>Bset Picks</p></Link>
              <div onMouseOver={() => { setsmlinks(true) }} onMouseLeave={() => { setsmlinks(false) }} ><p>Smart Devices</p></div>

              <div onMouseOver={() => { setsmlinks(true) }} onMouseLeave={() => { setsmlinks(false) }} className={smlinks === false ? Styles.smartlinksoff : Styles.smartlinksright}>

                <ul>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/watchblog/Apple%20Watch%20Series%209'}><span>Apple Watch Series 9</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/watchblog/Apple%20Watch%20Ultra%202'}><span>Apple Watch Ultra 2</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                </ul>
                <ul>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsug</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                </ul>
                <ul>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsug</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                </ul>
                <ul>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsug</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23 ultra 5g</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                  <li><Link className={Styles.smartitem} onClick={() => { setsmlinks(false) }} href={'https://blogs-com-timu.vercel.app/mobileblog/Samsung%20Galaxy%20S22%20Ultra%205G'}><span>Samsung s23</span><FaAngleRight className={Styles.sideicons} /></Link></li>
                </ul>
              </div>
              <Link href='/gadgets'><p>Gadgets</p></Link>
              <Link href='/news'><p>News</p></Link>
              <Link href='/innovations'><p>Innovations</p></Link>
              <Link href='/category'><p>Category</p></Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar