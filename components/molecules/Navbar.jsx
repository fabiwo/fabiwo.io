import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ActiveLink from '@/atoms/ActiveLink'
import Hamburger from '@/atoms/Hamburger'
import DarkModeToggle from '@/atoms/DarkModeToggle'
import Menu from '@/atoms/Menu'

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
    <>
      <nav
        className={
          `md:sticky md:bg-white md:dark:bg-outer-space-600 md:shadow top-0 mb-14 px-2 z-50` +
          (isScrolling ? ' scrolled' : '')
        }
      >
        {isOpen && (
          <div
            onClick={() => setOpen(false)}
            className='fixed w-screen h-screen bg-black bg-opacity-30'
          ></div>
        )}
        <div className='flex items-center justify-between max-w-3xl py-2 mx-auto md:justify-between'>
          <Hamburger isOpen={isOpen} setOpen={setOpen} />
          <Menu isOpen={isOpen} setOpen={setOpen}>
            <ActiveLink text='Home' href='/' activeClassName='active' />
            <ActiveLink text='Blog' href='/blog' activeClassName='active' />
            <ActiveLink
              text='Projects 🚧'
              href='/projects'
              activeClassName='active'
            />
            <ActiveLink text='About' href='/about' activeClassName='active' />
          </Menu>
          <DarkModeToggle mounted={mounted} />
        </div>
      </nav>
    </>
  )
}
