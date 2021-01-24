import Head from 'next/head'
import Navbar from '../components/molecules/Navbar'
import Footer from '../components/organisms/Footer'
import ScrollToTop from '../components/atoms/ScrollToTop'
import NewsletterForm from '../components/molecules/NewsletterForm'

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
      <main>
        <div className='flex flex-col items-start justify-center max-w-sm mx-auto lg:max-w-2xl'>
          {children}
          <NewsletterForm />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
