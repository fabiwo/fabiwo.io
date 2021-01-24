import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isVisible, setVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed p-2 bg-gray-800 rounded-full cursor-pointer bottom-10 right-5 transition duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={() => handleScroll()}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='17'
        height='17'
        viewBox='0 0 24 24'
      >
        <path
          fill='white'
          d='M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z'
        />
      </svg>
    </div>
  )
}
export default ScrollToTop
