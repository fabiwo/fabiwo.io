import MainLayout from '@/layouts/MainLayout'
import ThemeProvider from '@/layouts/ThemeProvider'
import SnippetCard from 'components/SnippetCard'
import { getSortedSlugs } from '@/lib/mdx'
import { v4 as uuidv4 } from 'uuid'
import { NextSeo } from 'next-seo'

const contentName = 'snippets'

export default function Snippets({ snippets, templates }) {
  return (
    <ThemeProvider>
      <NextSeo
        title='Snippets & Templates'
        canonical={`https://fabiwo.io/${contentName}`}
      />
      <MainLayout>
        <h1 className='mb-5 text-4xl font-bold text-gray-900'>
          Snippets & Templates
        </h1>
        <p className='mb-5 text-gray-800'>
          A collection of snippets and templates I use or have used.
        </p>
        <h2 className='mb-5 text-xl font-bold text-gray-900'>Snippets</h2>
        <div className='grid w-full grid-cols-2 gap-4 mb-5'>
          {snippets.map((d) => (
            <SnippetCard
              key={uuidv4()}
              id={d.id}
              title={d.title}
              description={d.description}
              icon={d.icon}
            />
          ))}
        </div>
        <h2 className='mb-5 text-xl font-bold text-gray-900'>Templates</h2>
        <div className='grid w-full grid-cols-2 gap-4 mb-5'>
          {templates.map((d) => (
            <SnippetCard
              key={uuidv4()}
              id={d.id}
              title={d.title}
              description={d.description}
              icon={d.icon}
            />
          ))}
        </div>
      </MainLayout>
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
