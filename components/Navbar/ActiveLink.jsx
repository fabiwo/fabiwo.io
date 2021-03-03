import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ activeClassName, href, text }) => {
  const { asPath } = useRouter()

  const fullClass = `bg-blue-100 text-blue-600 dark:bg-blue-500 dark:text-white  ${activeClassName}`

  if (href === '/') {
    var isActive = asPath === href
  } else {
    var isActive = asPath === href || asPath.includes(href)
  }

  return (
    <Link href={href}>
      <a
        className={`px-5 py-2 text-xl font-medium rounded-md cursor-pointer md:text-base hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white ${
          isActive ? fullClass : ''
        }`}
      >
        {text}
      </a>
    </Link>
  )
}

export default ActiveLink
