import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

export default function Navlink({ text, href }) {
  return (
    <Link href={href}>
      <a className='p-3 text-xl font-bold text-gray-600 sm:p-4 borderFade hover:text-gray-900'>
        {text}
      </a>
    </Link>
  )
}

const ActiveLink = ({ activeClassName, text, href, as }) => {
  const { asPath } = useRouter()
  const childClassName = ''

  const className =
    asPath === href || asPath === as
      ? `${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={href}>
      <a
        className={`text-2xl py-2 rounded px-5 hoverlink md:text-base ${
          className || ''
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

export { ActiveLink }
