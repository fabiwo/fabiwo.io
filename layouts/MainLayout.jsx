import NewsletterForm from '@/components/Newsletter/NewsletterForm'

export default function MainLayout({ children }) {
  return (
    <div className='relative flex flex-col items-start justify-center max-w-3xl px-10 mx-auto'>
      {children}
      <NewsletterForm />
    </div>
  )
}
