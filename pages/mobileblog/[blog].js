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
                    <h1 className={Styles.itemname}>Samsung Galaxy S22 Ultra</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis officiis deserunt quia amet, at, illum voluptates explicabo commodi porro provident, consectetur natus. Labore placeat eius necessitatibus iusto nisi. Debitis, a.</p>
                    <div className={Styles.imgdiv}>
                        <Image id={Styles.imgtag} height={612} width={833} src="/galaxy22ultra.jpg" alt='mobile' />
                    </div>
                    <div className={Styles.affiliatelink}>
                        <Link href={'/'}><button>Buy at amazon</button></Link>
                        <Link href={'/'}><button>Buy at walmart</button></Link>
                    </div>
                    <div className={Styles.prosandcons}>
                        <h2>Pros & Cons</h2>
                        <h3>Pros</h3>
                        <ul>
                            <li>Classic Note design with unique camera styling.</li>
                            <li>Built-in S Pen for versatility and improved latency.</li>
                            <li>Spectacular display with Dynamic AMOLED 2X and 120Hz refresh rate.</li>
                            <li>Fastest chip for enhanced performance.</li>
                            <li>Exceptional battery life, 45W Super Fast Charging.</li>
                            <li>Pro-grade camera system with massive sensors, 100x Space Zoom.</li>
                        </ul>

                        <h3>Cons</h3>
                        <ul>
                            <li>Built-in S Pen may impact device weight and size.</li>
                            <li>Fast charging capability not well communicated.</li>
                            <li>Not being named a Note might disappoint some users.</li>
                        </ul>


                    </div>
                    <div>
                        <h1>Highlight</h1>
                        <p className={Styles.highlight}>The Samsung Galaxy S22 Ultra offers a range of impressive features, including S Pen integration, a 4nm processor, and pro-grade cameras with 108MP wide-angle lens and 100x Space Zoom capabilities. Its all-day battery and Nightography innovations make it a great choice for photography enthusiasts. The device also excels in productivity with S Pen precision, seamless connectivity with other Galaxy devices, and robust privacy features through Samsung Knox. Overall, the Galaxy S22 Ultra represents the epitome of excellence in smartphone technology.</p>
                    </div>
                </section>
                <section className={Styles.section2}>
                    <div><h1>Samsung Galaxy  S22 Ultra/Configuration</h1></div>
                    <div className={Styles.tables}>
                    <table className={Styles.config} >
                            <tbody>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Launch</td>
                                    <td>Announced</td>
                                    <td className={Styles.tabledata}>2022, February 09
</td>
                                </tr>
                                <tr>
                                    <td>Released</td>
                                    <td className={Styles.tabledata}>2022, February 25</td>
                                </tr>
                            </tbody>
                        </table>
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
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
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
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Selfie Camera</td>
                                    <td>Camera module</td>
                                    <td className={Styles.tabledata}>40 MP, f/2.2, 26mm (wide), 1/2.82", 0.7µm, PDAF</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td className={Styles.tabledata}>4K@30/60fps, 1080p@30fps</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* memory section  */}
                                <tr>
                                    <td className={Styles.tablehead}>Memory</td>
                                    <td>Internal</td>
                                    <td className={Styles.tabledata}>128GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM, UFS 3.1</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
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
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
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
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* network section  */}
                                <tr>
                                    <td className={Styles.tablehead}>Network</td>
                                    <td>Wireless</td>
                                    <td className={Styles.tabledata}>GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
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
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
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
                     <div>
                        <h1>Our opinion</h1>
                        <p className={Styles.ouropinion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae exercitationem, nihil corrupti deleniti quos, facere fugit repellendus laudantium rerum voluptas ut a consequuntur. Rem incidunt praesentium sit vitae. Inventore totam ducimus porro, dolorum recusandae earum molestias doloribus ratione similique dolore laudantium deserunt quam ullam culpa. Eum quis voluptate delectus nulla sequi aspernatur, maxime eveniet cumque porro mollitia omnis magni officia voluptatibus totam nisi, iusto similique sed! Fuga similique rem omnis reprehenderit, officia laboriosam accusamus ratione quos quo excepturi incidunt officiis libero, quisquam dolorem laudantium quaerat. Aut quod et eaque magnam tempore, cupiditate, non quis soluta nisi impedit quo dicta.</p>
                     </div>
                </section>
            </div>
        </>
    )
}

export default Mobileslug