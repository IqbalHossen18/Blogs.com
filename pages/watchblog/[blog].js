// import { useRouter } from 'next/router'
import React from 'react'
import s from '../../styles/slugs.module.css';
import Image from 'next/image';
import { FaArrowRightToBracket } from "react-icons/fa6";
import Link from 'next/link';
import clientPromise from '../../lib/mongodb';
const Watchslug = ({posts}) => {
  // console.log(posts)

  return (
    <>
      <div className={s.ArticleContainer}>
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

export default Watchslug