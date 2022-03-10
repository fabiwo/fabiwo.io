import MainLayout from '@/layouts/MainLayout'
import { getSortedSlugs } from '@/lib/mdx'
import ThemeProvider from '@/layouts/ThemeProvider'
import { v4 as uuidv4 } from 'uuid'
import { NextSeo } from 'next-seo'
import ListOfReferences from 'components/ListOfReferences'

const contentName = 'publications'

export default function Snippets({ papers, patents }) {
  return (
    <ThemeProvider>
      <NextSeo
        title='Snippets'
        canonical={`https://fabiwo.io/${contentName}`}
      />
      <MainLayout>
        <h1 className='mb-5 text-4xl font-bold text-gray-900'>Publications</h1>
        <div className='mb-10'>
          <h2 className='mb-5 text-xl font-bold text-gray-900'>Paper</h2>
          <ListOfReferences references={papers} />
        </div>
        <div>
          <h2 className='mb-5 text-xl font-bold text-gray-900'>Patent</h2>
          <ListOfReferences references={patents} />
        </div>
      </MainLayout>
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
