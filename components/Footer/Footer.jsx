import SocialLink from '@/components/Social/SocialLink'
import SocialIcon from '@/components/Social/SocialIcon'

export default function Footer() {
  const socials = [
    { href: 'https://github.com/fabiwo', type: 'github' },
    {
      href: 'https://www.linkedin.com/in/fabian-wolff-32931613a/',
      type: 'linkedin',
    },
    { href: 'https://twitter.com/ffabiwo', type: 'twitter' },
    { href: 'mailto:fabiandwolff@gmail.com', type: 'mail' },
  ]

  return (
    <footer className='flex flex-col items-center w-full max-w-2xl pb-10 mx-auto'>
      {/* <hr className='w-4/5 mb-8 border-gray-300 border-1' /> */}
      <div className='flex justify-center md:space-x-2'>
        {socials.map((social) => (
          <SocialLink key={social.type} href={social.href}>
            <SocialIcon key={social.type} type={social.type} />
          </SocialLink>
        ))}
      </div>
    </footer>
  )
}
