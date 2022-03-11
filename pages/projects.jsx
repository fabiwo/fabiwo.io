import ThemeProvider from '@/layouts/ThemeProvider'
import SimpleProjectCard, {
  ExternalProjectCard,
} from '@/components/SimpleProjectCard'
import { NextSeo } from 'next-seo'
import { getSortedSlugs } from '@/lib/mdx'
import { v4 as uuidv4 } from 'uuid'
import { RouteHeading } from '@/layouts/SectionHeading'
import CardGrid from '@/layouts/CardGrid'

export default function Projects({ allProjectData }) {
  const observableNotebooks = [
    {
      title: 'Thermal Resistance Visualization',
      description:
        'Visualizing the thermal resistance of a 1D composite wall system',
      href: 'https://observablehq.com/@fawol/visualizing-thermal-resistance-rth-plane-wall',
      img: '/static/images/social/observablehq.svg',
    },
    {
      title: 'Indended tree from json',
      description:
        'A tabular layout for hierarchical data, indented trees allow one or more columns of values to be shown alongside indented names.',
      href: 'https://observablehq.com/@fawol/indended-tree-from-json',
      img: '/static/images/social/observablehq.svg',
    },
  ]

  return (
    <ThemeProvider>
      <NextSeo title='Projects' canonical='https://fabiwo.io/projects' />
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto'>
        <RouteHeading>Projects</RouteHeading>
        <p className='mb-5 text-zinc-800'>
          A curated list of my personal projects.
        </p>
        <CardGrid>
          {allProjectData.map((project) => (
            <SimpleProjectCard
              key={uuidv4()}
              dir='projects'
              id={project.id}
              title={project.title}
              description={project.description}
              img={project.logobw}
            />
          ))}
        </CardGrid>
        <h1 className='mb-5 text-lg font-bold text-zinc-900'>Observable</h1>
        <CardGrid>
          {observableNotebooks.map((d) => (
            <ExternalProjectCard
              key={uuidv4()}
              href={d.href}
              title={d.title}
              description={d.description}
              img={d.img}
            />
          ))}
        </CardGrid>
      </div>
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
