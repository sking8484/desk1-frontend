import '../styles/globals.css'
import Navbar from '../components/layout/Navbar'
import Head from 'next/head'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
