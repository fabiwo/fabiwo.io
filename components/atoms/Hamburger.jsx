import { useState } from 'react'

const Hamburger = ({ isOpen, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className={`hamburger hamburger--collapse lg:hidden z-50 ${
        isOpen ? 'is-active' : ''
      }`}
      type='button'
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  )
}

export default Hamburger
