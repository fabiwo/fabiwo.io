export default function MainLayout({ children }) {
  return (
    <div className='relative flex flex-col items-start justify-center max-w-3xl mx-auto px-7'>
      {children}
    </div>
  )
}
