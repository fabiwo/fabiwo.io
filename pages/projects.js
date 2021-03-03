import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import SectionHeading from '@/layouts/SectionHeading'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'

import Image from 'next/image'

const title = 'Fabian Wolff - Projects'

export default function Projects({}) {
  return (
    <ThemeProvider>
      <NextSeo title='Projects' canonical='https://fabiwo.io/projects' />

      <MainLayout>
        {/* Initialize head of page with title etc. */}{' '}
        <Head>
          <title> {title} </title>
        </Head>
        <SectionHeading text={'PROJECTS'} />
        <h1 className='py-5 text-3xl'>Under Construction 🚧👷</h1>
      </MainLayout>
    </ThemeProvider>
  )
}
