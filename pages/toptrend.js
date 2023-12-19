import React from 'react'
import Styles from '../styles/index.module.css';
import clientPromise from '../lib/mongodb';
import Link from 'next/link';
import Image from 'next/image';

const Toptrend = ({tagpost}) => {
  return (
    <>
       <style jsx>
        {`
           #blogs{
            margin:0px auto;
            border:none;
           }
        `}
       </style>
      <div className={Styles.blogcontainer}>
        <div id='blogs' className={Styles.blogs}>
        {tagpost.map((items)=>{
          return         <Link key={items.name} href={`http://localhost:3000/watchblog/${items.name}`} className={Styles.blogItem}>
          <div className={Styles.blogimg}>
            <Image id={Styles.blogimg} height={900} width={1200} src={`/${items.postimg}.jpg`} alt={`${items.name}`} />
          </div>
          <div className={Styles.aboutblog}>
            <p className={Styles.homeblogtag} > {items.tag} </p>
            <h1> {items.name} </h1>
            <h3>{items.postdescription}</h3>
          </div>
        </Link>
        })}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
    try {
      const client = await clientPromise;
      const db = client.db("test");
      const bestpicks = 'Top Deals';
  
      // Fetch all posts
      const posts = await db
        .collection("Allblogsofeornex")
        .find({})
        .toArray();
  
      // Extract unique tags
      const uniqueTags = [...new Set(posts.filter(post => post.tag === bestpicks).map(post => post.tag))];  

  
      // Fetch documents where the tag matches any of the unique tags
      const tagpost = await db
        .collection("Allblogsofeornex")
        .find({ tag: { $in: uniqueTags} })
        .toArray();
  
      return {
        props: { tagpost: JSON.parse(JSON.stringify(tagpost)) },
      };
    } catch (e) {
      console.error(e);
      return {
        props: { tagpost: [] },
      };
    }
  }
  
export default Toptrend