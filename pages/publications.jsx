import { getSortedSlugs } from '@/lib/mdx'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'
import ListOfReferences from 'components/ListOfReferences'
import { RouteHeading } from '@/layouts/SectionHeading'

const contentName = 'publications'

export default function Snippets({ papers, patents }) {
  return (
    <ThemeProvider>
      <NextSeo
        title='Snippets'
        canonical={`https://fabiwo.io/${contentName}`}
      />
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto'>
        <RouteHeading>Publications</RouteHeading>
        <div className='mb-10'>
          <h2 className='mb-5 text-xl font-bold text-zinc-900'>Paper</h2>
          <ListOfReferences references={papers} />
        </div>
        <div className='mb-10'>
          <h2 className='mb-5 text-xl font-bold text-zinc-900'>Patent</h2>
          <ListOfReferences references={patents} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const slugs = getSortedSlugs(contentName)
  const papers = slugs.filter((d) => d.type === 'paper')
  const patents = slugs.filter((d) => d.type === 'patent')
  return {
    props: {
      papers,
      patents,
    },
  }
}
