
import Image from 'next/image';
import Styles from '../styles/index.module.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import clientPromise from '../lib/mongodb';

const Home = ({posts}) => {
  return (
    <>
      <div className={Styles.container}>
        <Link href={'/'} className={Styles.trend1}>
          <div className={Styles.trendtext} >
            <h2>Smart Watches Unveiled 2023</h2>
            <h5>Join us in exploring the smart revolution on your wrist!</h5>
          </div>
          <Image className={Styles.trendimg} height={3743} width={5614} src='/watchtrend1.jpg' alt='watch' />
        </Link>
        <div className={Styles.trend2}>
          <Link href={'/'} className={Styles.trend1}>
            <div className={Styles.trendtext} >
              <h2>Mobile Tech 2023</h2>
              <h5>2023's mobile devices combine AR, 5G, and AI for immersive experiences and unparalleled connectivity on the move.</h5>
            </div>
            <Image className={Styles.trendimg} height={3743} width={5614} src='/mobiletrend1.jpg' alt='mobile' />
          </Link>
        </div>
        <div className={Styles.trend3}>
          <Link href={'/'} className={Styles.trend1}>
            <div className={Styles.trendtext} >
              <h2>2023 Laptops: Sleek Designs, Peak Performance</h2>
              <h5>Laptops combine sleek aesthetics with peak performance, epitomizing the perfect fusion of style and productivity.</h5>
            </div>
            <Image className={Styles.trendimg} height={3743} width={5614} src='/laptoptrend1.jpg' alt='laptop' />
          </Link>
        </div>
        <div className={Styles.trend4}>
          <Link href={'/'} className={Styles.trend1}>
            <div className={Styles.trendtext} >
              <h2>2023 Tablets: Futuristic Mobility</h2>
              <h5>Experience the future of on-the-go computing with cutting-edge features and sleek designs in the latest tablets of 2023, redefining portable technology.</h5>
            </div>
            <Image className={Styles.trendimg} height={3743} width={5614} src='/tablettrend1.jpg' alt='tablet' />
          </Link>
        </div>
      </div>
      {/*https://blogs-com-timu.vercel.app/ */}
      {/* items.category === 'watch'? 'watchblog': 'mobileblog'}/${ */}
      <div className={Styles.blogcontainer}>
        <div className={Styles.blogs}>
        {posts.map((items)=>{
          return         <Link key={items.name} href={`https://blogs-com-timu.vercel.app/${items.category === 'watch'? 'watchblog': 'mobileblog'}/${items.name}`} className={Styles.blogItem}>
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
        {/* <div className={Styles.bloghilight}>

        </div> */}
 
      </div>
      <div style={{ marginBottom:'15px', position:'relative', marginLeft:'20px'}}>
        <button style={{display:'flex', justifyContent:'center', alignItems:'center'}}>More Blogs<MdKeyboardArrowRight style={{fontSize:'20px'}}/></button>
      </div>
      <div style={{ backgroundColor: '#34495E', fontFamily: 'sans-serif', color: '#EAEDED', width: '100%', textAlign: 'center' }}>
        <div style={{padding:'20px'}}>
        <p>Dear valued customer,</p>
        <p><br /></p>
        <p>We at EorNex are committed to providing you with expertly researched and reliably recommended products and services. Your trust is our promise, and we take great pride in ensuring that you can have confidence in our offerings. Thank you for choosing EorNex.</p>
        <p><br /></p>
        <p>Best regards,</p>
        <p>The EorNex Team</p>

        <hr></hr>
        </div>
        </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
      const client = await clientPromise;
      const db = client.db("test");

      let posts = await db
          .collection("Allblogsofeornex")
          .find({})
          .toArray();
      return {
          props: { posts: JSON.parse(JSON.stringify(posts))}
      };
  } catch (e) {
      console.error(e);
      return {
        props: {
          error: "An error occurred while fetching data.",
        },
      };
  
  }
}

export default Home;
