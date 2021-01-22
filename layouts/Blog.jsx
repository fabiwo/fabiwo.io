import Head from 'next/head'
import Navbar from '../components/molecules/Navbar'
import Footer from '../components/organisms/Footer'
import ScrollToTop from '../components/atoms/ScrollToTop'
// Component renders main page layout with the same styling and fills with content

export default function MainLayout({ children }) {
  return (
    <>
      {/* Html head information */}
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Head of the page  */}
      <Navbar />
      {/* Main Page or Post Content */}
      <main>{children}</main>
      <ScrollToTop />

      <Footer />
    </>
  )
}
