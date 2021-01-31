import Head from 'next/head'
import Navbar from '../components/molecules/Navbar'
import Footer from '../components/organisms/Footer'
import ScrollToTop from '../components/atoms/ScrollToTop'
import { useState, useEffect } from 'react'

// Component renders main page layout with the same styling and fills with content

export default function SeoProvider({ children }) {
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <>
      {/* Html head information */}
      <Head>
        <meta name='robots' content='follow, index' />
      </Head>
      {/* Head of the page  */}
      <Navbar mounted={mounted} />
      {/* Main Page or Post Content */}
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
