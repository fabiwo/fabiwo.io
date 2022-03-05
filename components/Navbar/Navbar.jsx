import React, { useState, useEffect } from 'react'
import ActiveLink from '@/components/Navbar/ActiveLink'
import Hamburger from '@/components/Navbar/Hamburger'
// import DarkModeToggle from '@/components/Navbar/DarkModeToggle'
import Menu from '@/components/Navbar/Menu'

export default function Navbar({ mounted }) {
  const [isScrolling, setScrolling] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`md:sticky md:bg-white md:shadow top-0 mb-14 z-50${
        isScrolling ? ' scrolled' : ''
      }`}
    >
      {isOpen && (
        <button
          type='button'
          aria-hidden='true'
          onClick={() => setOpen(false)}
          className='fixed w-screen h-screen bg-black bg-opacity-30'
        />
      )}
      <div className='flex items-center justify-between max-w-3xl py-2 mx-auto px-7 md:justify-between'>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
        <Menu isOpen={isOpen} setOpen={setOpen}>
          <ActiveLink text='Home' href='/' activeClassName='active' />
          <ActiveLink text='Blog' href='/blog' activeClassName='active' />
          <ActiveLink
            text='Projects'
            href='/projects'
            activeClassName='active'
          />
          {/* <ActiveLink
            text='Snippets 🚧'
            href='/snippets'
            activeClassName='active'
          /> */}
          <ActiveLink text='About' href='/about' activeClassName='active' />
        </Menu>
        {/* <DarkModeToggle mounted={mounted} /> */}
      </div>
    </nav>
  )
}
