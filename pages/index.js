
import Head from 'next/head';
import Styles from '../styles/index.module.css';

const Home = () => {
  return (
    <>
     <Head>
        <title>Shopnest.com</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="apple-icon.png" />
     </Head>
     
     <div className={Styles.maindiv}>
          <h1>hello world</h1>
        </div>
    </>
  );
};

export default Home;
