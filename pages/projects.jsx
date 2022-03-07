import MainLayout from '@/layouts/MainLayout'
import SectionHeading from '@/layouts/SectionHeading'
import ThemeProvider from '@/layouts/ThemeProvider'
import SimpleProjectCard from '@/components/SimpleProjectCard'
import { NextSeo } from 'next-seo'
import { getSortedSlugs } from '@/lib/mdx'
import { v4 as uuidv4 } from 'uuid'

export default function Projects({ allProjectData }) {
  return (
    <ThemeProvider>
      <NextSeo title='Projects' canonical='https://fabiwo.io/projects' />
      <MainLayout withNewsletter={false}>
        <SectionHeading>Projects</SectionHeading>
        <div className='w-full my-10 space-y-3'>
          {allProjectData.map((project) => (
            <SimpleProjectCard
              key={uuidv4()}
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
