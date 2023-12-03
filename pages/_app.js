import '@/styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  // Any additional logic you want to apply to all pages goes here

  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp;
