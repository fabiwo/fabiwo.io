const InlineLink = ({ text, href }) => (
  <a className='inline' href={href} target='_blank' rel='noreferrer'>
    {text}
  </a>
)

export const InlineNavLink = ({ text, href }) => (
  <a className='inline' href={href}>
    {text}
  </a>
)

export default InlineLink
