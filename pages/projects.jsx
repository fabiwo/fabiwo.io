import MainLayout from '@/layouts/MainLayout'
import SectionHeading from '@/layouts/SectionHeading'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'

export default function Projects() {
  return (
    <ThemeProvider>
      <NextSeo title='Projects' canonical='https://fabiwo.io/projects' />
      <MainLayout>
        <SectionHeading>PROJECTS</SectionHeading>
        <h1 className='py-5 text-3xl'>Under Construction 🚧👷</h1>
      </MainLayout>
    </ThemeProvider>
  )
}
