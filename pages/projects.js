import Head from 'next/head'
import MainLayout from '../layouts/MainLayout'
import ResponsiveSectionHeading from '../components/atoms/ResponsiveSectionHeading'
import SeoProvider from '../layouts/SeoProvider'

import Image from 'next/image'

const title = 'Fabian Wolff - Projects'

export default function Projects({}) {
  return (
    <SeoProvider>
      <MainLayout>
        {/* Initialize head of page with title etc. */}{' '}
        <Head>
          <title> {title} </title>
        </Head>
        <ResponsiveSectionHeading text={'PROJECTS'} />
        <h1 className='py-5 text-3xl'>Under Construction 🚧👷</h1>
      </MainLayout>
    </SeoProvider>
  )
}
