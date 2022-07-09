import '../styles/globals.css'
import Navbar from '../components/layout/Navbar'
import Head from 'next/head'
import Footer from '../components/layout/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
        />
        <Script src="https://kit.fontawesome.com/3247fc6be4.js" crossorigin="anonymous"></Script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
