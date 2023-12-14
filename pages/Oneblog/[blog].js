// import { useRouter } from 'next/router'
import React from 'react'
import s from '../../styles/slugs.module.css';
import Image from 'next/image';
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FiCornerRightDown } from "react-icons/fi";
import Link from 'next/link';
import clientPromise from '../../lib/mongodb';
const Oneblog = ({posts}) => {
  // console.log(posts)

  return (
    <>
      <div className={s.ArticleContainer}>
        {/* <div className={s.Items}>
          <div className={s.box1}>
            <h4>Best Deals</h4>
            <h1>Apple Watch Series 9</h1>
            <p>The Ultimate Fusion of Power, Innovation, and Sustainability</p>
          </div>

          <div className={s.box2}>
            <p>At the forefront of smartwatch innovation is the all-new Apple Watch Series 9, a powerhouse of advanced features that redefine the capabilities of wearable technology.</p>
            <div className={s.articleimg}>
              <button style={{ backgroundColor: 'white', border: '0.5px solid black', color: "black", float: 'right', fontWeight: 'bold' }}>Price - $249</button>
              <Image id={s.articleimg} height={980} width={980} src='/applewatchseries9-article.jpg' alt='apple watch series 9' />
              <Link href={'https://www.amazon.com/Apple-Smartwatch-Midnight-Aluminum-Fitness/dp/B0CHX13ZGM?th=1'} target='-blank'>
                <button>Buy at Amazon<FaArrowRightToBracket className={s.buyarrow} /></button>
              </Link>
            </div>
            <h3>Apple Watch Series 9 - <span style={{ borderBottom: '2px solid green' }}>Highlight</span></h3>
            <p>

              The Apple Watch Series 9 is a comprehensive health and fitness companion, featuring ECG, blood oxygen monitoring, sleep tracking, and cycle insights for user well-being. Powered by the advanced S9 SiP chip, it introduces a 60% increase in capabilities and a four-core Neural Engine for faster machine learning. The 2x brighter Always-On Retina display reaches 2000 nits, and watchOS 10 brings a redesigned interface. As Apple's first carbon-neutral product, it provides insights into mental and vision health, transcending the typical smartwatch to become a lifestyle essential.
            </p>
            <div className={s.aboutarticle}>
              <h3>Apple Watch Series 9/configuration</h3>
              <div>
                <table className={s.configtable}>
                  <tbody>
                    <tr>
                      <td className={s.hoverableCell}>Display</td>
                      <td className={s.hoverableCell}>2x Brighter, Up to 2000 nits</td>
                    </tr>
                    <tr>
                      <td className={s.hoverableCell}>Chip</td>
                      <td className={s.hoverableCell}>S9 SiP, Dual-core CPU, 5.6 billion transistors</td>
                    </tr>
                    <tr>
                      <td className={s.hoverableCell}>Body</td>
                      <td className={s.hoverableCell}>Carbon Neutral, Eco-friendly materials</td>
                    </tr>
                    <tr>
                      <td className={s.hoverableCell}>Battery Life</td>
                      <td className={s.hoverableCell}>Up to 18 hours, Fast Charging available</td>
                    </tr>
                    <tr>
                      <td className={s.hoverableCell}>Fitness & Health</td>
                      <td className={s.hoverableCell}>ECG, Blood Oxygen, Sleep, Cycle Tracking, Fitness+</td>
                    </tr>
                    <tr>
                      <td className={s.hoverableCell}>Network & Connectivity</td>
                      <td className={s.hoverableCell}>Cellular Connectivity, GPS, Wi-Fi, Ultra Wideband</td>
                    </tr>
                    <tr>
                      <td className={s.hoverableCell}>Water Resistant & Memory</td>
                      <td className={s.hoverableCell}>50 meters, Swimproof & Internal 64GB</td>
                    </tr>
                    <tr>
                      <td className={s.hoverableCell}>Body</td>
                      <td className={s.hoverableCell}>Anodized Aluminum</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={s.box3}>
            <div className={s.reasontobuy}>
              <h2>Reason To Buy</h2>
              <table>
                <thead>
                  <tr>
                    <th>Pros</th>
                    <th>Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vivid Display</td>
                    <td>Cost Consideration</td>
                  </tr>
                  <tr><td>Eco-Friendly Design</td>
                    <td>Dependency on iPhone</td>
                  </tr>
                  <tr><td>Siri Advancements</td></tr>

                  <tr><td>Health Tracking</td></tr>
                  <tr><td>Swimproof Design</td></tr>
                  <tr><td>Connectivity Options</td></tr>
                </tbody>
              </table>
            </div>
            <div className={s.highlight}>
              <h1>Our Opinion</h1>
              <p>
                Choose the Apple Watch Series 9 for a holistic health and fitness companion. Packed with ECG, blood oxygen monitoring, and sleep tracking, it's powered by an advanced S9 SiP chip. With a 2x brighter Always-On Retina display and a commitment to sustainability, it's not just a smartwatch but a lifestyle essential for a healthier and more connected future</p>
            </div>
          </div>
        </div> */}
        {posts.map((article)=>{
               return    <div key={article.name} className={s.Items}>
               <div className={s.box1}>
                 <h4>{article.tag}</h4>
                 {console.log(article.name)}
                 <h1>{article.name}</h1>
                 <p>{article.surname}</p>
               </div>
     
               <div className={s.box2}>
                 <p>{article.subdesc}</p>
                 <div className={s.articleimg}>
                   <button style={{ backgroundColor: 'white', border: '0.5px solid black', color: "black", float: 'right', fontWeight: 'bold' }}>Price - ${article.price}</button>
                   <Image id={s.articleimg} height={980} width={980} src={`/${article.articleimg}.jpg`} alt={`${article.name}`} />
                   <Link href={`${article.articlelink}`} target='-blank'>
                     <button>Buy at Amazon<FaArrowRightToBracket className={s.buyarrow} /></button>
                   </Link>
                 </div>
                 <h3>{article.name} - <span style={{ borderBottom: '2px solid green' }}>Highlight</span></h3>
                 <p>{article.highlight} </p>
                 <div className={s.aboutarticle}>
                   <h3>{article.name}/configuration</h3>
                   <div>
                     <table className={s.configtable}>
                       <tbody>
                         <tr>
                           <td className={s.hoverableCell}>Display</td>
                           <td className={s.hoverableCell}>{article.config.display}</td>
                         </tr>
                         <tr>
                           <td className={s.hoverableCell}>Chip</td>
                           <td className={s.hoverableCell}>{article.config.chip}</td>
                         </tr>
                         <tr>
                           <td className={s.hoverableCell}>Body</td>
                           <td className={s.hoverableCell}>{article.config.body}</td>
                         </tr>
                         <tr>
                           <td className={s.hoverableCell}>Battery Life</td>
                           <td className={s.hoverableCell}>{article.config.batterylife}</td>
                         </tr>
                         <tr>
                           <td className={s.hoverableCell}>Fitness & Health</td>
                           <td className={s.hoverableCell}>{article.config.fitnesshealth}</td>
                         </tr>
                         <tr>
                           <td className={s.hoverableCell}>Network & Connectivity</td>
                           <td className={s.hoverableCell}>{article.config.networkconnectivity}</td>
                         </tr>
                         <tr>
                           <td className={s.hoverableCell}>Water Resistant & Memory</td>
                           <td className={s.hoverableCell}>{article.config.waterresistantmemory}</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
     
               <div className={s.box3}>
                 <div className={s.reasontobuy}>
                   <h2>Reason To Buy</h2>
                   <table>
                     <thead>
                       <tr>
                         <th>Pros</th>
                         <th>Cons</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>{article.resontobuy.pros.PR1}</td>
                         <td>{article.resontobuy.cons.CR1}</td>
                       </tr>
                       <tr><td>{article.resontobuy.pros.PR2}</td>
                         <td>{article.resontobuy.cons.CR2}</td>
                       </tr>
                       <tr><td>{article.resontobuy.pros.PR3}</td></tr>
     
                       <tr><td>{article.resontobuy.pros.PR4}</td></tr>
                       <tr><td>{article.resontobuy.pros.PR5}</td></tr>
                       <tr><td>{article.resontobuy.pros.PR6}</td></tr>
                     </tbody>
                   </table>
                 </div>
                 <div className={s.highlight}>
                   <h1>Our Opinion</h1>
                   <p>{article.opinion}</p>
                 </div>
               </div>
             </div>
        })}
      </div>
      {/* <div className={s.similerblogs}>
        <div className={s.similertext}><span>More Blogs</span><FiCornerRightDown /></div>
        <div className={s.blogs}>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
          <Link href={'/'} id={s.blogItem}>
            <div className={s.blogimg}>
              <Image id={s.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={s.aboutblog}>
              <h4>Apple Watch Series 9</h4>
            </div>
          </Link>
        </div>
      </div> */}
    </>
  )
}


export async function getServerSideProps(context) {
  try {
      const client = await clientPromise;
      const db = client.db("test");

      const posts = await db
          .collection("watchblogs")
          .find({name:context.query.blog})
          .toArray();
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

export default Oneblog