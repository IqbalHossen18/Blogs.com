
import Image from 'next/image';
import Styles from '../styles/index.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className={Styles.container}>
        <Link href={'/'} className={Styles.trend1}>
          <div className={Styles.trendtext} >
            <h2>Smart Watches Unveiled</h2>
            <h5>Join us in exploring the smart revolution on your wrist!</h5>
          </div>
          <Image className={Styles.trendimg} height={3743} width={5614} src='/watchtrend1.jpg' alt='watch' />
        </Link>
        <div className={Styles.trend2}>
          <Link href={'/'} className={Styles.trend1}>
            <div className={Styles.trendtext} >
              <h2>Smart Watches Unveiled</h2>
              <h5>Join us in exploring the smart revolution on your wrist!</h5>
            </div>
            <Image className={Styles.trendimg} height={3743} width={5614} src='/watchtrend1.jpg' alt='watch' />
          </Link>
        </div>
        <div className={Styles.trend3}>
          <Link href={'/'} className={Styles.trend1}>
            <div className={Styles.trendtext} >
              <h2>Smart Watches Unveiled</h2>
              <h5>Join us in exploring the smart revolution on your wrist!</h5>
            </div>
            <Image className={Styles.trendimg} height={3743} width={5614} src='/watchtrend1.jpg' alt='watch' />
          </Link>
        </div>
        <div className={Styles.trend4}>
          <Link href={'/'} className={Styles.trend1}>
            <div className={Styles.trendtext} >
              <h2>Smart Watches Unveiled</h2>
              <h5>Join us in exploring the smart revolution on your wrist!</h5>
            </div>
            <Image className={Styles.trendimg} height={3743} width={5614} src='/watchtrend1.jpg' alt='watch' />
          </Link>
        </div>
      </div>
      <div className={Styles.blogcontainer}>
        <div className={Styles.blogs}>

          <div className={Styles.blogItem}>
            <div className={Styles.blogimg}>

            </div>
            <div className={Styles.aboutblog}>

            </div>
          </div>
          <div className={Styles.blogItem}>
            <div className={Styles.blogimg}>

            </div>
            <div className={Styles.aboutblog}>

            </div>
          </div>
          <div className={Styles.blogItem}>
            <div className={Styles.blogimg}>

            </div>
            <div className={Styles.aboutblog}>

            </div>
          </div>
          <div className={Styles.blogItem}>
            <div className={Styles.blogimg}>

            </div>
            <div className={Styles.aboutblog}>

            </div>
          </div>
        </div>
        <div className={Styles.bloghilight}>

        </div>
      </div>
    </>
  );
};

export default Home;
