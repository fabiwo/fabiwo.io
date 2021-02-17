const InlineLink = ({ text, href }) => {
  return (
    <a className='inline' href={href} target='_blank'>
      {text}
    </a>
  )
}

export const InlineNavLink = ({ text, href }) => {
  return (
    <a className='inline' href={href}>
      {text}
    </a>
  )
}

export default InlineLink
