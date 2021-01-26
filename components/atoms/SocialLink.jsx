const SocialLink = ({ children, href }) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className='text-gray-400 transition duration-300 ease-out transform cursor-pointer hover:scale-110 h-14 w-14 md:h-16 md:w-16 hover:text-gray-800'
    >
      {children}
    </a>
  )
}

export default SocialLink
