import MainLayout from '../../layouts/Blog'
import Date from '../../components/Date'
import Head from 'next/head'
import { getAllSlugIds, getSlugData } from '../../lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import MDXComponents from '../../components/MDXComponents'
import PostStats from '../../components/PostStats'
import NewsletterForm from '../../components/NewsletterForm'
import Image from 'next/image'

export default function Post({ source, frontMatter, API_KEY }) {
  const content = hydrate(source, {
    components: MDXComponents,
  })

  return (
    <MainLayout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>

      <article className='flex flex-col w-full mx-auto'>
        <div className='max-w-2xl mx-auto'>
          <h1 className='mb-1 text-5xl font-bold'>{frontMatter.title}</h1>
          <div className='flex w-full py-5 space-x-2 '>
            <Image
              alt='Fabian Wolff'
              height={40}
              width={40}
              src='/images/fabiwo.jpg'
              className='rounded-full'
            />
            <div className='flex flex-col justify-end'>
              <p className='text-sm font-semibold'>
                {frontMatter.author ? frontMatter.author : 'Fabian Wolff'}
              </p>
              <Date dateString={frontMatter.date} />
            </div>
            <div className='flex items-end justify-end flex-grow text-gray-800'>
              <PostStats readTime={frontMatter.readTimeString} />
            </div>
          </div>
          <Image
            width={500}
            height={400}
            layout={'responsive'}
            className='object-cover rounded shadow'
            src={
              frontMatter.image ? frontMatter.image : '/images/placeholder.svg'
            }
            alt={frontMatter.alt}
          />
          <div className='w-full mt-5 prose max-w-none'>{content}</div>
          <NewsletterForm API_KEY={API_KEY} />
        </div>
      </article>
    </MainLayout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getSlugData(params.id, 'blog-posts')
  const API_KEY = process.env.BUTTONDOWN_API_KEY
  return {
    props: {
      source: postData.mdxSource,
      frontMatter: postData.frontMatter,
      API_KEY,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllSlugIds('blog-posts')
  return {
    paths,
    fallback: false,
  }
}
