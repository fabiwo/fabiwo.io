import React, { useState, useEffect } from 'react'
import ActiveLink from '@/components/Navbar/ActiveLink'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

// import DarkModeToggle from '@/components/Navbar/DarkModeToggle'

const NavbarFullScreen = ({ mounted, isNavbarOpen, setNavbarOpen }) => {
  const routes = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Snippets', href: '/snippets' },
    { text: 'Publications', href: '/publications' },
    { text: 'About', href: '/about' },
  ]

  function toggleMenu() {
    const el = document.documentElement
    if (isNavbarOpen) {
      setNavbarOpen(false)
      el.style = ''
    } else {
      setNavbarOpen(true)
      el.style = 'overflow-y: hidden; overflow-x: hidden;'
    }
  }

  useEffect(() => {
    const el = document.documentElement
    return function cleanup() {
      el.style = ''
    }
  }, [])

  return (
    <div className='flex flex-col justify-center px-5'>
      <nav className='flex items-center justify-between w-full relative max-w-prose border-zinc-200 mx-auto pt-8 pb-8 sm:pb-16 text-zinc-900 bg-zinc-50 bg-opacity-60'>
        <div className='ml-[-0.60rem]'>
          <button
            onClick={toggleMenu}
            className={`p-5 hamburger hamburger--collapse md:hidden z-50 ${
              isNavbarOpen ? 'is-active' : ''
            }`}
            type='button'
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner' />
            </span>
          </button>
          {/* Mobile menu state */}
          {isNavbarOpen ? (
            <ul className='items-center h-screen w-screen flex flex-col absolute bg-zinc-50 z-50'>
              {routes.map((d) => (
                <Link key={uuidv4()} href={d.href}>
                  <span
                    key={uuidv4()}
                    className='px-3 py-2 rounded-lg cursor-pointer text-zinc-800 hover:font-bold focus:outline-none transition-all'
                  >
                    {d.text}
                  </span>
                </Link>
              ))}
            </ul>
          ) : null}

          {/* Normal state */}
          {routes.map((d) => (
            <ActiveLink
              key={uuidv4()}
              text={d.text}
              href={d.href}
              activeClassName='active'
            />
          ))}
        </div>
      </nav>
    </div>
  )
}

export default NavbarFullScreen
