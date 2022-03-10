const SocialLink = ({ children, href }) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={href}
    className='text-gray-400 transition duration-300 ease-out transform cursor-pointer hover:scale-110 md:h-11 md:w-11 hover:text-gray-800'
  >
    {children}
  </a>
)

export default SocialLink
