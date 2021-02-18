import Navbar from '@/molecules/Navbar'
import Footer from '@/organisms/Footer'
import ScrollToTop from '@/components/atoms/ScrollToTop'
import { useState, useEffect } from 'react'

// Component renders main page layout with the same styling and fills with content

export default function SeoProvider({ children }) {
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
      <Navbar mounted={mounted} />
      {/* Main Page or Post Content */}
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
