import Head from 'next/head'
import MainLayout from '../layouts/Blog'
import ResponsiveSectionHeading from '../components/atoms/ResponsiveSectionHeading'
import Centre from '../components/atoms/Centre'

import Image from 'next/image'

const title = 'Fabian Wolff - About Me'

export default function About() {
  return (
    <MainLayout>
      {/* Initialize head of page with title etc. */}{' '}
      <Head>
        <title> {title} </title>
      </Head>
      <ResponsiveSectionHeading text={'ABOUT ME'} />
      <h1 className='py-5 text-3xl'>Under Construction 🚧👷</h1>
    </MainLayout>
  )
}
