import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navlink, { ActiveLink } from '../atoms/Navlink'

const name = 'Fabian Wolff'

export default function Navbar() {
  const [isScrolling, setScrolling] = useState(false)

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
    <nav
      className={`nav w-full mt-10 mb-20` + (isScrolling ? ' scrolled' : '')}
    >
      <div className='flex items-center justify-between max-w-4xl p-5 mx-auto my-0'>
        <Link href='/'>
          <img
            src='/images/logo.svg'
            alt={name}
            className='w-12 h-12 cursor-pointer'
          />
        </Link>
        <div className='flex space-x-4'>
          <ActiveLink text='Home' href='/' activeClassName='active' />
          <ActiveLink text='Blog' href='/blog' activeClassName='active' />
          <ActiveLink
            text='Projects'
            href='/projects'
            activeClassName='active'
          />
          <ActiveLink text='About' href='/about' activeClassName='active' />
        </div>
      </div>
    </nav>
  )
}
