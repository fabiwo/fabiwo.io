import MainLayout from '@/layouts/MainLayout'
import ThemeProvider from '@/layouts/ThemeProvider'
import SimpleProjectCard from '@/components/SimpleProjectCard'
import { NextSeo } from 'next-seo'
import { getSortedSlugs } from '@/lib/mdx'
import { v4 as uuidv4 } from 'uuid'

export default function Projects({ allProjectData }) {
  return (
    <ThemeProvider>
      <NextSeo title='Projects' canonical='https://fabiwo.io/projects' />
      <MainLayout>
        <h1 className='mb-5 text-4xl font-bold text-gray-900'>Projects</h1>
        <p className='mb-5 text-gray-800'>
          A curated list of my personal projects.
        </p>
        <div className='grid w-full grid-cols-2 gap-4 mb-5'>
          {allProjectData.map((project) => (
            <SimpleProjectCard
              key={uuidv4()}
              id={project.id}
              title={project.title}
              description={project.description}
              img={project.logobw}
              status={project.status}
            />
          ))}
        </div>
      </MainLayout>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const allProjectData = getSortedSlugs('projects')
  return {
    props: {
      allProjectData,
    },
  }
}
