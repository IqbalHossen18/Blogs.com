import React from 'react'
import Styles from '../../styles/moblieslug.module.css';
import Image from 'next/image';
import Link from 'next/link';
import clientPromise from '../../lib/mongodb';
const Mobileslug = ({posts}) => {
    // console.log(posts)
    return (
        <>
            {posts.map((element)=>{
                return   <div key={element.name} className={Styles.mainsection}>
                <section className={Styles.section1}>
                    <h5>{element.tag}</h5>
                    <h1 className={Styles.itemname}>{element.name}</h1>
                    <p>{element.subdesc}</p>
                    <div className={Styles.imgdiv}>
                        <Image id={Styles.imgtag} height={612} width={833} src={`/${element.articleimg}.jpg`} alt='mobile' />
                    </div>
                    <div className={Styles.affiliatelink}>
                        <Link href={`${element.ariticlelink}`}><button>Buy at amazon</button></Link>
                        <Link href={`${element.ariticlelink2}`}><button>Buy at walmart</button></Link>
                    </div>
                    <div className={Styles.prosandcons}>
                        <h2>Pros & Cons</h2>
                        <h3>Pros</h3>
                        <ul>
                            <li>{element.prosandcons.pros.PR1}</li>
                            <li>{element.prosandcons.pros.PR2}</li>
                            <li>{element.prosandcons.pros.PR3}</li>
                            <li>{element.prosandcons.pros.PR4}</li>
                            <li>{element.prosandcons.pros.PR5}</li>
                            <li>{element.prosandcons.pros.PR6}</li>
                        </ul>
                        <h3>Cons</h3>
                        <ul>
                           <li>{element.prosandcons.cons.CR1}</li>
                            <li>{element.prosandcons.cons.CR1}</li>
                            <li>{element.prosandcons.cons.CR3}</li>
                        </ul>


                    </div>
                    <div>
                        <h1>Highlight</h1>
                        <p className={Styles.highlight}>{element.highlight}</p>
                    </div>
                </section>
                <section className={Styles.section2}>
                    <div><h1>Configuration</h1></div>
                    <div className={Styles.tables}>
                    <table className={Styles.config} >
                            <tbody>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Launch</td>
                                    <td>Announced</td>
                                    <td className={Styles.tabledata}>{element.config.launch}</td>
                                </tr>
                                <tr>
                                    <td>Released</td>
                                    <td className={Styles.tabledata}>{element.config.release}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config}>
                            <tbody>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={4}>Display</td>
                                    <td>Type</td>
                                    <td className={Styles.tabledata}>{element.config.display.type}</td>
                                </tr>
                                <tr>
                                    <td>Size</td>
                                    <td className={Styles.tabledata}>{element.config.display.size}</td>
                                </tr>
                                <tr>
                                    <td>Resolution</td>
                                    <td className={Styles.tabledata}>{element.config.display.resolution}</td>
                                </tr>
                                <tr>
                                    <td>Protection</td>
                                    <td className={Styles.tabledata}>{element.config.display.protection}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* camera section  */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Back Camera</td>
                                    <td>Camera module</td>
                                    <td className={Styles.tabledata}>{element.config.camera.maincam.mainmodule}</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td className={Styles.tabledata}>{element.config.camera.maincam.mainvideo}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Selfie Camera</td>
                                    <td>Camera module</td>
                                    <td className={Styles.tabledata}>{element.config.camera.selfiecam.selfiemodule}</td>
                                </tr>
                                <tr>
                                    <td>Video</td>
                                    <td className={Styles.tabledata}>{element.config.camera.selfiecam.selfievideo}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* memory section  */}
                                <tr>
                                    <td className={Styles.tablehead}>Memory</td>
                                    <td>Internal</td>
                                    <td className={Styles.tabledata}>{element.config.memory}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* body sectioin */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={4}>Body</td>
                                    <td>Dimensions</td>
                                    <td className={Styles.tabledata}>{element.config.body.dimensions}</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td className={Styles.tabledata}>{element.config.body.weight}</td>
                                </tr>
                                <tr>
                                    <td>Buildof</td>
                                    <td className={Styles.tabledata}>{element.config.body.buildof}</td>
                                </tr>
                                <tr>
                                    <td>Sim</td>
                                    <td className={Styles.tabledata}>{element.config.body.slot}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* battery section  */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Battery</td>
                                    <td>Type</td>
                                    <td className={Styles.tabledata}>{element.config.battery.type}</td>
                                </tr>
                                <tr>
                                    <td>Charging</td>
                                    <td className={Styles.tabledata}>{element.config.battery.charging}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* network section  */}
                                <tr>
                                    <td className={Styles.tablehead}>Network</td>
                                    <td>Wireless</td>
                                    <td className={Styles.tabledata}>{element.config.netword}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={4}>Connectivity</td>
                                    <td>Wlan</td>
                                    <td className={Styles.tabledata}>{element.config.connectivity.wifihotspot}</td>
                                </tr>
                                <tr>
                                    <td>Bluetooth</td>
                                    <td className={Styles.tabledata}>{element.config.connectivity.bluetooth}</td>
                                </tr>
                                <tr>
                                    <td>Usb</td>
                                    <td className={Styles.tabledata}>{element.config.connectivity.usb}</td>
                                </tr>
                                <tr>
                                    <td>Radio</td>
                                    <td className={Styles.tabledata}>{element.config.connectivity.radio}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className={Styles.config} >
                            <tbody>
                                {/* feature section  */}
                                <tr>
                                    <td className={Styles.tablehead} rowSpan={2}>Features</td>
                                    <td>Face Id</td>
                                    <td className={Styles.tabledata}>{element.config.features.faceid}</td>
                                </tr>
                                <tr>
                                    <td>Fingerprint</td>
                                    <td className={Styles.tabledata}>{element.config.features.fingerprint}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className={Styles.section3}>
                     <div>
                        <h1>Our opinion</h1>
                        <p className={Styles.ouropinion}>{element.opinion}</p>
                     </div>
                </section>
            </div>
            })}

        </>
    )
}


export async function getServerSideProps(context) {
    try {
        const client = await clientPromise;
        const db = client.db("test");
  
        const posts = await db
            .collection("mobileblogs")
            .find({name:context.query.blog})
            .toArray();
            // console.log(posts)
        return {
            props: { posts: JSON.parse(JSON.stringify(posts)) },
        };
    } catch (e) {
        console.error(e);
        return {
          props: { posts: [] }, // Return an empty array or handle the error in your component
        };
     
    }
  }

export default Mobileslug