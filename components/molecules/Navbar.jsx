import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navlink, { ActiveLink } from '../atoms/Navlink'
import Hamburger from '../atoms/Hamburger'
import Menu from '../atoms/Menu'

export default function Navbar() {
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
  }, [])

  return (
    <>
      <nav
        className={
          `sticky md:bg-white md:shadow top-0 mb-20 px-2 z-50` +
          (isScrolling ? ' scrolled' : '')
        }
      >
        <div className='flex justify-between max-w-3xl p-2 mx-auto md:justify-center'>
          {/* <Link href='/'>
            <img
              src='/images/logo.svg'
              alt={'Fabian Wolff Logo'}
              className='order-1 w-12 h-12 cursor-pointer md:order-none rotate'
            />
          </Link> */}
          <Hamburger isOpen={isOpen} setOpen={setOpen} />
          <Menu isOpen={isOpen} setOpen={setOpen}>
            <ActiveLink text='Home' href='/' activeClassName='active' />
            <ActiveLink text='Blog' href='/blog' activeClassName='active' />
            <ActiveLink
              text='Projects 🚧'
              href='/projects'
              activeClassName='active'
            />
            <ActiveLink
              text='About 🚧'
              href='/about'
              activeClassName='active'
            />
          </Menu>
        </div>
      </nav>
    </>
  )
}
