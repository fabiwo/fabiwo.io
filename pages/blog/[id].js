import MainLayout from '../../layouts/Blog'
import Date from '../../components/atoms/Date'
import Head from 'next/head'
import { getAllSlugIds, getSlugData } from '../../lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import MDXComponents from '../../components/MDXComponents'
import PostStats from '../../components/molecules/PostStats'
import NewsletterForm from '../../components/molecules/NewsletterForm'
import Image from 'next/image'

export default function Post({ source, frontMatter }) {
  const content = hydrate(source, {
    components: MDXComponents,
  })

  return (
    <MainLayout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>

      <article>
        <h1 className='mb-1 text-4xl font-bold md:text-5xl'>
          {frontMatter.title}
        </h1>
        <div className='flex flex-col py-5 space-y-3 md:flex-row '>
          <div className='flex space-x-2'>
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
          </div>
          <div className='flex items-end flex-grow text-gray-800 md:justify-end'>
            <PostStats readTime={frontMatter.readTimeString} />
          </div>
        </div>
        <div>
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
        </div>
        <div className='w-full mt-5 prose max-w-none'>{content}</div>
      </article>
    </MainLayout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getSlugData(params.id, 'blog-posts')
  return {
    props: {
      source: postData.mdxSource,
      frontMatter: postData.frontMatter,
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
