import NewsletterForm from '@/components/Newsletter/NewsletterForm'

export default function MainLayout({ children, withNewsletter = true }) {
  return (
    <div className='relative flex flex-col items-start justify-center max-w-3xl mx-auto px-7'>
      {children}
      {withNewsletter && <NewsletterForm />}
    </div>
  )
}
