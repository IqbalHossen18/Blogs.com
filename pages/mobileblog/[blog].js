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
                    <div><h1>Samsung Galaxy 22 Ultra/Configuration</h1></div>
                    <div className={Styles.tables}>
                        <table className={Styles.config}>
                            <tbody>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={4}>Display</td>
                                    <td>Type</td>
                                    <td className={Styles.tabledata}>Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits peak brightness</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td className={Styles.tabledata}>6.8 inches, 90.2% screen-to-body ratio</td>
                                </tr>
                                <tr>
                                    <td>Resolution</td>
                                    <td className={Styles.tabledata}>1440 x 3088 pixels, 19.3:9 ratio, ~500 ppi density</td>
                                </tr>
                                <tr>
                                    <td>Protection</td>
                                    <td className={Styles.tabledata}>Corning Gorilla Glass Victus+</td>
                                </tr>
                                {/* camera section  */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Back Camera</td>
                                    <td>Camera module</td>
                                    <td className={Styles.tabledata}>
                                        108 MP wide (23mm); 10 MP periscope (230mm, 10x zoom); 10 MP telephoto (70mm); 12 MP ultrawide (13mm, 120°), dual pixel PDAF, Super Steady video</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td className={Styles.tabledata}>	8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EIS</td>
                                </tr>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Selfie Camera</td>
                                    <td>Camera module</td>
                                    <td className={Styles.tabledata}>40 MP, f/2.2, 26mm (wide), 1/2.82", 0.7µm, PDAF</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td className={Styles.tabledata}>4K@30/60fps, 1080p@30fps</td>
                                </tr>
                                {/* memory section  */}
                                <tr>
                                    <td className={Styles.tablehead}>Memory</td>
                                    <td>Internal</td>
                                    <td className={Styles.tabledata}>128GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM, UFS 3.1</td>
                                </tr>
                                {/* body sectioin */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={4}>Body</td>
                                    <td>Dimensions</td>
                                    <td className={Styles.tabledata}>163.3 x 77.9 x 8.9 mm (6.43 x 3.07 x 0.35 in)</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td className={Styles.tabledata}>228 g / 229 g (mmWave) (8.04 oz)</td>
                                </tr>
                                <tr>
                                    <td>Buildof</td>
                                    <td className={Styles.tabledata}>Glass front (Gorilla Glass Victus+), glass back (Gorilla Glass Victus+), aluminum frame</td>
                                </tr>
                                <tr>
                                    <td>Sim</td>
                                    <td className={Styles.tabledata}>Nano-SIM and eSIM or Dual SIM (2 Nano-SIMs and eSIM, dual stand-by)</td>
                                </tr>
                                {/* battery section  */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Battery</td>
                                    <td>Type</td>
                                    <td className={Styles.tabledata}>Li-Ion 5000 mAh, non-removable</td>
                                </tr>
                                <tr>
                                    <td>Charging</td>
                                    <td className={Styles.tabledata}>45W wired, PD3.0, 15W wireless (Qi/PMA), 4.5W reverse wireless</td>
                                </tr>
                                {/* network section  */}
                                <tr>
                                    <td className={Styles.tablehead}>Network</td>
                                    <td>Wireless</td>
                                    <td className={Styles.tabledata}>GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
                                </tr>
                                {/* connectivity section  */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={4}>Connectivity</td>
                                    <td>Wlan</td>
                                    <td className={Styles.tabledata}>Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct</td>
                                </tr>
                                <tr>
                                    <td>Bluetooth</td>
                                    <td className={Styles.tabledata}>5.2, A2DP, LE</td>
                                </tr>
                                <tr>
                                    <td>Usb</td>
                                    <td className={Styles.tabledata}>USB Type-C 3.2, OTG</td>
                                </tr>
                                <tr>
                                    <td>Radio</td>
                                    <td className={Styles.tabledata}>No</td>
                                </tr>
                                {/* feature section  */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Features</td>
                                    <td>Face Id</td>
                                    <td className={Styles.tabledata}>Yes</td>
                                </tr>
                                <tr>
                                    <td>Fingerprint</td>
                                    <td className={Styles.tabledata}>Under display , ultrasonic</td>
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