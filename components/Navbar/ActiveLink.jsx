import { useRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ activeClassName, href, text }) => {
  const { asPath } = useRouter()

  const fullClass = `bg-blue-100 text-blue-600 ${activeClassName}`

  let isActive = ''
  if (href === '/') {
    isActive = asPath === href
  } else {
    isActive = asPath === href || asPath.includes(href)
  }

  return (
    <Link href={href}>
      <button
        type='button'
        className={`px-5 py-2 text-xl font-medium rounded-md text-gray-800 cursor-pointer md:text-base hover:bg-blue-100 hover:text-blue-500 focus:outline-none ${
          isActive ? fullClass : ''
        }`}
      >
        {text}
      </button>
    </Link>
  )
}

export default ActiveLink
