import React, { useState, useEffect } from 'react'
import ActiveLink from '@/components/Navbar/ActiveLink'
import Hamburger from '@/components/Navbar/Hamburger'
// import DarkModeToggle from '@/components/Navbar/DarkModeToggle'

const NavbarFullScreen = ({ mounted }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav
        className={`transition-width duration-500 ease-in-out fixed md:sticky md:shadow top-0 left-0 z-50 bg-white ${
          isOpen ? 'w-full' : 'w-0 md:w-full'
        } h-screen md:h-auto overflow-hidden`}
      >
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
        <div className='flex flex-col max-w-3xl md:flex-row whitespace-nowrap md:space-y-0 md:px-7 md:mx-auto md:py-2 md:items-center md:justify-between'>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1.5 px-7 md:px-0 justify-center'>
            <ActiveLink text='Home' href='/' activeClassName='active' />
            <ActiveLink text='Blog' href='/blog' activeClassName='active' />
            <ActiveLink
              text='Projects'
              href='/projects'
              activeClassName='active'
            />
            <ActiveLink
              text='Snippets'
              href='/snippets'
              activeClassName='active'
            />
            <ActiveLink
              text='Publications'
              href='/publications'
              activeClassName='active'
            />
            <ActiveLink text='About' href='/about' activeClassName='active' />
          </div>
          <div className='mb-7 md:mb-0 px-7 md:px-0'>
            {/* <DarkModeToggle mounted={mounted} /> */}
          </div>
        </div>
      </nav>
      <Hamburger isOpen={isOpen} setOpen={setOpen} />
    </>
  )
}

export default NavbarFullScreen
