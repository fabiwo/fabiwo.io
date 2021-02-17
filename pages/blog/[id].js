import SeoProvider from '@/layouts/SeoProvider'
import MainLayout from '@/layouts/MainLayout'
import Date from '@/components/atoms/Date'
import TableOfContent from '@/components/molecules/TableOfContent'
import Head from 'next/head'
import { getAllSlugIds, getSlugData } from '@/lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import MDXComponents from '@/components/MDXComponents'
import PostStats from '@/molecules/PostStats'
import Image from 'next/image'

export default function Post({ source, headings, frontMatter }) {
  const content = hydrate(source, {
    components: MDXComponents,
  })

  return (
    <SeoProvider>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <MainLayout>
        <article className='w-full max-w-3xl mx-auto mb-10'>
          <h1 className='mb-1 text-4xl font-bold md:text-5xl'>
            {frontMatter.title}
          </h1>
          <div className='flex flex-col py-5 space-y-3 md:flex-row '>
            <div className='flex space-x-2'>
              <Image
                alt='Fabian Wolff'
                height={40}
                width={40}
                src='/static/images/fabiwo.jpg'
                className='rounded-full'
              />
              <div className='flex flex-col justify-end'>
                <p className='text-sm font-semibold'>
                  {frontMatter.author ? frontMatter.author : 'Fabian Wolff'}
                </p>
                <Date dateString={frontMatter.date} />
              </div>
            </div>
            <div className='flex items-end flex-grow text-gray-800 dark:text-gray-300 md:justify-end'>
              <PostStats readTime={frontMatter.readTimeString} />
            </div>
          </div>
          <div>
            <Image
              width={500}
              height={500 / (16 / 10)}
              layout={'responsive'}
              className='object-cover '
              src={
                frontMatter.image
                  ? frontMatter.image
                  : '/static/images/placeholder.svg'
              }
              alt={frontMatter.alt}
              priority='true'
            />
          </div>
          <TableOfContent headings={headings} />
          <section className='w-full mt-5 prose prose-blue max-w-none dark:prose-dark'>
            {content}
          </section>
        </article>
      </MainLayout>
    </SeoProvider>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getSlugData(params.id, 'blog')
  return {
    props: {
      headings: postData.headings,
      source: postData.mdxSource,
      frontMatter: postData.frontMatter,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllSlugIds('blog')
  return {
    paths,
    fallback: false,
  }
}
