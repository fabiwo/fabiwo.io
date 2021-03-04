import Navbar from '@/components/Navbar/Navbar'
import NavbarFullScreen from '@/components/Navbar/NavbarFullScreen'
import Footer from '@/components/Footer/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { useState, useEffect } from 'react'

// Component renders main page layout with the same styling and fills with content

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
    return function cleanup() {
      setMounted(false)
    }
  }, [])

  return (
    <>
      <NavbarFullScreen mounted={mounted} />
      {/* Main Page or Post Content */}
      <main className='mt-14'>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
