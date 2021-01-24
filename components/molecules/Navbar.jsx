import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navlink, { ActiveLink } from '../atoms/Navlink'
import Hamburger from '../atoms/Hamburger'
import Menu from '../atoms/Menu'

const name = 'Fabian Wolff'

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
      <nav className={`nav py-2 mb-20 px-5` + (isScrolling ? ' scrolled' : '')}>
        <div className='flex items-center justify-between max-w-4xl p-5 mx-auto my-0'>
          <Link href='/'>
            <img
              src='/images/logo.svg'
              alt={name}
              className='order-1 w-12 h-12 cursor-pointer lg:order-none'
            />
          </Link>
          <Hamburger isOpen={isOpen} setOpen={setOpen} />
          <Menu isOpen={isOpen} setOpen={setOpen}>
            <ActiveLink text='Home' href='/' activeClassName='active' />
            <ActiveLink text='Blog' href='/blog' activeClassName='active' />
            <ActiveLink
              text='Projects'
              href='/projects'
              activeClassName='active'
            />
            <ActiveLink text='About' href='/about' activeClassName='active' />
          </Menu>
        </div>
      </nav>
    </>
  )
}
