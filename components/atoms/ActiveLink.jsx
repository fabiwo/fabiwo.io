import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ activeClassName, href, text }) => {
  const { asPath } = useRouter()
  const fullClass = `bg-blue-100 text-blue-600 dark:bg-blue-500 dark:text-white  ${activeClassName}`

  return (
    <Link href={href}>
      <a
        className={`px-5 py-2 text-xl font-medium rounded-md cursor-pointer md:text-base hover:bg-blue-100 hover:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white ${
          asPath === href ? fullClass : ''
        }`}
      >
        {text}
      </a>
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink
