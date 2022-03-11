import { useRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ activeClassName, href, text }) => {
  const { asPath } = useRouter()

  const fullClass = `font-semibold text-zinc-800 ${activeClassName}`

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
        className={`px-3 py-1 text-md rounded-md hidden md:inline-flex cursor-pointer text-zinc-800 hover:bg-zinc-100 hover:text-zinc-800 focus:outline-none ${
          isActive ? fullClass : ''
        }`}
      >
        {text}
      </button>
    </Link>
  )
}

export default ActiveLink
