import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // Any additional logic you want to apply to all pages goes here

  return <>
       <Head>
        <title>EorNex.com</title>
        <link rel="icon" href="/favicon-100x100.png" />
     </Head>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp;
