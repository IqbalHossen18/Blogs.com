import React from 'react'
import Styles from '../../styles/moblieslug.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Mobileslug = () => {
    return (
        <>
            <div className={Styles.mainsection}>
                <section className={Styles.section1}>
                    <h5>Top Deals</h5>
                    <h1>Samsung Galaxy 22 Ultra</h1>
                    <p>This is aobut okjlk  oiueorjlk lkejklwerkj wkerjweorjwoerj weriowejrowkdklf lk   osiudjowe</p>
                    <p>Launch</p>
                    <div className={Styles.imgdiv}>
                    <Image id={Styles.imgtag} height={612} width={833} src="/galaxy22ultra.jpg" alt='mobile' />
                    </div>
                    <div className={Styles.affiliatelink}>
                        <Link href={'/'}><button>Buy at amazon</button></Link>
                        <Link href={'/'}><button>Buy at walmart</button></Link>
                    </div>
                    <p className={Styles.highlight}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere consectetur? Ipsam sapiente minus voluptatem deserunt vel provident molestiae dolorum voluptas a nisi, ipsum fugiat sit praesentium perspiciatis eius quis mollitia reprehenderit eligendi fugit in repudiandae ipsa iste corrupti cupiditate. Dolorem, id! Minima laboriosam ipsum corrupti, voluptas quae nobis a.</p>
                </section>
                <section className={Styles.section2}>
                        <div><h1>Configuration</h1></div>
                        <div className={Styles.tables}>
                        <table className={Styles.configdisplay}>
                            <tbody>
                                <tr>
                                    <td rowSpan={4}>Display</td>
                                    <td>Type :</td>
                                    <td>Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak) Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak</td>
                                </tr>
                                <tr>
                                    <td>Size :</td>
                                    <td>data of type</td>
                                </tr>
                                <tr>
                                    <td>Resolution :</td>
                                    <td>data of type</td>
                                </tr>
                                <tr>
                                    <td>Protection :</td>
                                    <td>data of type</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                </section>
                <section className={Styles.section3}>

                </section>
            </div>
        </>
    )
}

export default Mobileslug