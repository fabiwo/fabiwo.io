import NavbarFullScreen from '@/components/Navbar/NavbarFullScreen'
import Footer from '@/components/Footer/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { useState, useEffect } from 'react'
import MainLayout from '@/layouts/MainLayout'

// Component renders main page layout with the same styling and fills with content

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false)
  const [isNavbarOpen, setNavbarOpen] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
    return function cleanup() {
      setMounted(false)
    }
  }, [])

  return (
    <>
      <NavbarFullScreen
        mounted={mounted}
        isNavbarOpen={isNavbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <MainLayout>{children}</MainLayout>
      <Footer />
      <ScrollToTop />
    </>
  )
}
