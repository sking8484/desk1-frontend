import '../styles/globals.css'
import Navbar from '../components/layout/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
