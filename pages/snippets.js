import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import SectionHeading from '@/layouts/SectionHeading'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'

const title = 'Fabian Wolff - Snippets'

export default function Snippets({}) {
  return (
    <ThemeProvider>
      <NextSeo title='Snippets' canonical='https://fabiwo.io/snippets' />

      <MainLayout>
        {/* Initialize head of page with title etc. */}{' '}
        <Head>
          <title> {title} </title>
        </Head>
        <SectionHeading text={'SNIPPETS'} />
        <h1 className='py-5 text-3xl'>Under Construction 🚧👷</h1>
      </MainLayout>
    </ThemeProvider>
  )
}
