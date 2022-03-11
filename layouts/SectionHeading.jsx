export default function SectionHeading({ children }) {
  return <h1 className='mb-5 text-2xl font-bold text-zinc-900'>{children}</h1>
}

export const RouteHeading = ({ children }) => (
  <h1 className='mb-5 text-3xl sm:text-4xl font-bold text-zinc-900'>
    {children}
  </h1>
)
