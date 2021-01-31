import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ activeClassName, href, text }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a
        className={`px-5 py-2 text-xl font-medium transition-colors duration-300 ease-in-out rounded-md cursor-pointer md:text-base hover:bg-blue-50 hover:text-blue-800 ${
          asPath === href ? activeClassName : ''
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
