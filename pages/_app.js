import '../styles/globals.css';

// next
import Head from 'next/head';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Mahfujar Rahman — Python Data Engineer</title>
        <meta
          name='description'
          content='Mahfujar Rahman — Python Data Engineer at lobstr.io. Web crawlers, anti-bot bypass, and ETL pipelines built with Python, SQLAlchemy, PostgreSQL, and AWS.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#131424' />
        <link rel='icon' href='/logo.svg' />
        <meta property='og:title' content='Mahfujar Rahman — Python Data Engineer' />
        <meta
          property='og:description'
          content='Python Data Engineer — web crawlers, anti-bot bypass, and ETL pipelines at scale.'
        />
        <meta property='og:type' content='website' />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
