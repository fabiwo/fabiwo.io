import React, { useState, useEffect } from 'react'
import ActiveLink from '@/components/Navbar/ActiveLink'
import Hamburger from '@/components/Navbar/Hamburger'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

// import DarkModeToggle from '@/components/Navbar/DarkModeToggle'

const NavbarFullScreen = ({ mounted, isNavbarOpen, setNavbarOpen }) => {
  const [isOpen, setOpen] = useState(false)

  const routes = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Snippets', href: '/snippets' },
    { text: 'Publications', href: '/publications' },
    { text: 'About', href: '/about' },
  ]
  return (
    <div className='flex flex-col justify-center px-8'>
      <nav className='flex items-center justify-between w-full relative max-w-2xl border-zinc-200 mx-auto pt-8 pb-8 sm:pb-16 text-zinc-900 bg-zinc-50 bg-opacity-60'>
        <div className='ml-[-0.60rem]'>
          <Hamburger isOpen={isOpen} setOpen={setOpen} />
          {/* Mobile menu state */}
          {isOpen ? (
            <ul className='items-center h-screen w-full flex flex-col absolute bg-zinc-50 z-50'>
              {routes.map((d) => (
                <Link href={d.href}>
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
            <ActiveLink text={d.text} href={d.href} activeClassName='active' />
          ))}
        </div>
      </nav>
    </div>
  )
}

export default NavbarFullScreen
