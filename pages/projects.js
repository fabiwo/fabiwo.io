import Head from 'next/head'
import MainLayout from '../layouts/Blog'
import ContentLayout from '../layouts/ContentLayout'
import ResponsiveSectionHeading from '../components/atoms/ResponsiveSectionHeading'
import Centre from '../components/atoms/Centre'

import Image from 'next/image'

const title = 'Fabian Wolff - Projects'

export default function Projects({}) {
  return (
    <MainLayout>
      {/* Initialize head of page with title etc. */}{' '}
      <Head>
        <title> {title} </title>
      </Head>
      <ContentLayout>
        <ResponsiveSectionHeading text={'PROJECTS'} />
        <h1>Under Construction</h1>
        <Centre>
          <Image src={'/images/coming-soon.svg'} height={600} width={600} />
        </Centre>
      </ContentLayout>
    </MainLayout>
  )
}
