// Component renders main page layout with the same styling and fills with content

export default function AboutLayout({ children }) {
  return (
    <>
      <div className='flex flex-col items-start justify-center max-w-5xl px-10 mx-auto'>
        {children}
      </div>
    </>
  )
}
