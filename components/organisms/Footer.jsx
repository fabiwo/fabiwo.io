import React from 'react'
import FooterLink from '../atoms/FooterLink'
import Github, {
  Mail,
  LinkedIn,
  Twitter,
  Instagram,
} from '../atoms/icons/HexSocial'

export default function Footer() {
  const footerLinks = [
    { href: '/', text: '#uses' },
    { href: '/', text: '#newsletter' },
  ]

  return (
    <footer className='flex flex-col w-full max-w-2xl py-10 mx-auto'>
      <hr className='w-full mb-8 border-gray-300 border-1' />
      <div className='flex justify-center space-x-7'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/fabian-wolff-32931613a/'
        >
          <LinkedIn />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/fabiwo'
        >
          <Github />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/ffabiwo'
        >
          <Twitter />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/fabiwo/'
        >
          <Instagram />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:fabiandwolff@gmail.com'
        >
          <Mail />
        </a>
      </div>
      {/* <div className='flex justify-center space-x-5'>
        {footerLinks.map((link, i) => (
          <FooterLink key={i} href={link.href} text={link.text} />
        ))}
      </div> */}
    </footer>
  )
}
