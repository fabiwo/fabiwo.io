import NewsletterForm from '@/molecules/NewsletterForm'

// Component renders main page layout with the same styling and fills with content

export default function MainLayout({ children }) {
  return (
    <div className='relative flex flex-col items-start justify-center max-w-3xl px-5 mx-auto'>
      {children}
      <NewsletterForm />
    </div>
  )
}
