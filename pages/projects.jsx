import MainLayout from '@/layouts/MainLayout'
import SectionHeading from '@/layouts/SectionHeading'
import ThemeProvider from '@/layouts/ThemeProvider'
import SimpleProjectCard from '@/components/SimpleProjectCard'
import { NextSeo } from 'next-seo'
import { getSortedSlugs } from '@/lib/mdx'
import { getUniqueId } from '@/lib/uniqueId'

export default function Projects({ allProjectData }) {
  return (
    <ThemeProvider>
      <NextSeo title='Projects' canonical='https://fabiwo.io/projects' />
      <MainLayout withNewsletter={false}>
        <SectionHeading>PROJECTS</SectionHeading>
        <div className='w-full my-10 space-y-3'>
          {allProjectData.map((project) => (
            <SimpleProjectCard
              key={getUniqueId()}
              id={project.id}
              title={project.title}
              description={project.description}
              img={project.logobw}
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
