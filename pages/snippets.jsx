import ThemeProvider from '@/layouts/ThemeProvider'
import SnippetCard from 'components/SnippetCard'
import { getSortedSlugs } from '@/lib/mdx'
import { v4 as uuidv4 } from 'uuid'
import { NextSeo } from 'next-seo'
import { RouteHeading } from '@/layouts/SectionHeading'
import CardGrid from '@/layouts/CardGrid'

const contentName = 'snippets'

export default function Snippets({ snippets, templates }) {
  return (
    <ThemeProvider>
      <NextSeo
        title='Snippets & Templates'
        canonical={`https://fabiwo.io/${contentName}`}
      />
      <div className='flex flex-col justify-center items-start max-w-prose mx-auto'>
        <RouteHeading>Snippets Templates</RouteHeading>
        <p className='mb-5 text-zinc-800'>
          A collection of snippets and templates I use or have used.
        </p>
        <h2 className='mb-5 text-xl font-bold text-zinc-900'>Snippets</h2>
        <CardGrid>
          {snippets.map((d) => (
            <SnippetCard
              key={uuidv4()}
              id={d.id}
              title={d.title}
              description={d.description}
              icon={d.icon}
            />
          ))}
        </CardGrid>
        <h2 className='mb-5 text-xl font-bold text-zinc-900'>Templates</h2>
        <CardGrid>
          {templates.map((d) => (
            <SnippetCard
              key={uuidv4()}
              id={d.id}
              title={d.title}
              description={d.description}
              icon={d.icon}
            />
          ))}
        </CardGrid>
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const slugs = getSortedSlugs(contentName)
  const templates = slugs.filter((d) => d.type === 'template')
  const snippets = slugs.filter((d) => d.type === 'snippet')
  return {
    props: {
      snippets,
      templates,
    },
  }
}
