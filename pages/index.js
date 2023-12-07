
import Image from 'next/image';
import Styles from '../styles/index.module.css';
import Link from 'next/link';

const Home = () => {
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
      <div className={Styles.blogcontainer}>
        <div style={{ margin: '20px auto', fontFamily: 'sans-serif', color: 'lightred', width: '80%', textAlign: 'center' }}> <p>Dear valued customer,</p>
          <p><br /></p>
          <p>We at EorNex are committed to providing you with expertly researched and reliably recommended products and services. Your trust is our promise, and we take great pride in ensuring that you can have confidence in our offerings. Thank you for choosing EorNex.</p>
          <p><br /></p>
          <p>Best regards,</p>
          <p>The EorNex Team</p>

          <hr></hr></div>
        <div className={Styles.blogs}>
          <Link href={'Oneblog/This is blogpost'} className={Styles.blogItem}>
            <div className={Styles.blogimg}>
              <Image id={Styles.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={Styles.aboutblog}>
              <h1>Apple Watch Series 9: Precision, Elegance, Connectivity.</h1>
              <h3> Swimproof, S9 SiP, Always-On Retina, 45mm/41mm, aluminum/stainless steel, up to 18 hours - <span>learn more..</span></h3>

            </div>
          </Link>
          <Link href={'/'} className={Styles.blogItem}>
            <div className={Styles.blogimg}>
              <Image id={Styles.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={Styles.aboutblog}>
              <h1>Apple Watch Series 9</h1>
              <h3>Unleashing the Future of Wearables: Series 9 Boasts Powerful S9 SiP, Intuitive Gestures, 2x Brighter Display, Siri Upgrades, and Health Innovations in a Stylish, Eco-Friendly Design.</h3>

            </div>
          </Link>
          <Link href={'/'} className={Styles.blogItem}>
            <div className={Styles.blogimg}>
              <Image id={Styles.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={Styles.aboutblog}>
              <h1>Apple Watch Series 9</h1>
              <h3>Unleashing the Future of Wearables: Series 9 Boasts Powerful S9 SiP, Intuitive Gestures, 2x Brighter Display, Siri Upgrades, and Health Innovations in a Stylish, Eco-Friendly Design.</h3>

            </div>
          </Link>
          <Link href={'/'} className={Styles.blogItem}>
            <div className={Styles.blogimg}>
              <Image id={Styles.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={Styles.aboutblog}>
              <h1>Apple Watch Series 9</h1>
              <h3>Unleashing the Future of Wearables: Series 9 Boasts Powerful S9 SiP, Intuitive Gestures, 2x Brighter Display, Siri Upgrades, and Health Innovations in a Stylish, Eco-Friendly Design.</h3>

            </div>
          </Link>
          <Link href={'/'} className={Styles.blogItem}>
            <div className={Styles.blogimg}>
              <Image id={Styles.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={Styles.aboutblog}>
              <h1>Apple Watch Series 9</h1>
              <h3>Unleashing the Future of Wearables: Series 9 Boasts Powerful S9 SiP, Intuitive Gestures, 2x Brighter Display, Siri Upgrades, and Health Innovations in a Stylish, Eco-Friendly Design.</h3>

            </div>
          </Link>
          <Link href={'/'} className={Styles.blogItem}>
            <div className={Styles.blogimg}>
              <Image id={Styles.blogimg} height={900} width={1200} src='/applewatchseries9.jpg' alt='apple watch series 9' />
            </div>
            <div className={Styles.aboutblog}>
              <h1>Apple Watch Series 9</h1>
              <h3>Unleashing the Future of Wearables: Series 9 Boasts Powerful S9 SiP, Intuitive Gestures, 2x Brighter Display, Siri Upgrades, and Health Innovations in a Stylish, Eco-Friendly Design.</h3>
            </div>
          </Link>
        </div>
        <div className={Styles.bloghilight}>

        </div>
      </div>
    </>
  );
};

export default Home;
