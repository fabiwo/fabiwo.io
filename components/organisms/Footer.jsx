import SocialLink from '../atoms/SocialLink'
import SocialIcon from '../atoms/SocialIcon'

export default function Footer() {
  const socials = [
    { href: 'https://github.com/fabiwo', type: 'github' },
    {
      href: 'https://www.linkedin.com/in/fabian-wolff-32931613a/',
      type: 'linkedin',
    },
    { href: 'https://twitter.com/ffabiwo', type: 'twitter' },
    { href: 'mailto:fabiandwolff@gmail.com', type: 'mail' },
    // { href: 'https://www.instagram.com/fabiwo/', type: 'instagram' },
  ]

  return (
    <footer className='flex flex-col items-center w-full max-w-2xl py-10 mx-auto'>
      <hr className='w-4/5 mb-8 border-gray-300 border-1' />
      <div className='flex justify-center space-x-4 md:space-x-5'>
        {socials.map((social, i) => (
          <SocialLink key={i} href={social.href}>
            <SocialIcon key={i} type={social.type} />
          </SocialLink>
        ))}
      </div>
    </footer>
  )
}
