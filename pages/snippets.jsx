import MainLayout from '@/layouts/MainLayout'
import SectionHeading from '@/layouts/SectionHeading'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'

export default function Snippets() {
  return (
    <ThemeProvider>
      <NextSeo title='Snippets' canonical='https://fabiwo.io/snippets' />
      <MainLayout>
        <SectionHeading>Snippets</SectionHeading>
        <h1 className='py-5 text-3xl'>Under Construction 🚧👷</h1>
      </MainLayout>
    </ThemeProvider>
  )
}
