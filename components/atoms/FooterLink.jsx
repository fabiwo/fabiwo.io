import Link from 'next/link'

export default function FooterLink({ href, text }) {
  return (
    <Link href={href}>
      <a className='text-lg text-gray-400 hover:text-black'>{text}</a>
    </Link>
  )
}
