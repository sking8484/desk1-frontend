import '../styles/globals.css'
import Navbar from '../components/layout/Navbar'
import Head from 'next/head'
import Footer from '../components/layout/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeskOne Trading</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
        />
        <meta property="og:title" content="DeskOne Trading"/>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="A multi-dimensional approach to trading."/>
        <meta property="og:image" content="/deskonebackground.png"/>
        <meta property="og:url" content="deskonetrading.com"/>

      </Head>
      <div className = 'globalNavbarContainer'>
        <Navbar />
      </div>

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
