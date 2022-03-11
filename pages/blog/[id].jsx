import ThemeProvider from '@/layouts/ThemeProvider'
import Date, { LastEdited } from '@/components/Date'
import { getAllSlugIds, getSlugData } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import PostStats from '@/components/Cards/PostStats'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Post({ source, frontMatter, postId }) {
  console.log(frontMatter.image)

  return (
    <ThemeProvider>
      <NextSeo
        titleTemplate='%s'
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://fabiwo.io/blog/${postId}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: frontMatter.date,
            tags: frontMatter.tags,
          },
          locale: 'en_IE',
          url: `https://fabiwo.io/blog/${postId}`,
          site_name: 'Fabian Wolff',
          title: frontMatter.title,
          images: [
            {
              url: `https://fabiwo.io/${frontMatter.image}`,
              width: 800,
              height: 600,
              alt: frontMatter.alt,
            },
          ],
        }}
        twitter={{
          handle: '@ffabiwo',
          site: '@ffabiwo',
          cardType: 'summary_large_image',
        }}
      />
      <article className='flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-10'>
        <h1 className='mb-1 text-2xl font-bold md:text-5xl'>
          {frontMatter.title}
        </h1>
        <div className='flex flex-col py-5 space-y-3 md:flex-row justify-between w-full'>
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
          <div className='flex items-end flex-grow text-zinc-800 md:justify-end'>
            <PostStats readTime={`${frontMatter.readTime.toFixed(0)} min`} />
          </div>
        </div>

        <div className='mb-5 w-full'>
          <Image
            width={500}
            height={500 / (16 / 10)}
            layout='responsive'
            className='object-cover'
            src={
              frontMatter.image
                ? frontMatter.image
                : '/static/images/placeholder.svg'
            }
            alt={frontMatter.alt}
            priority='true'
          />
        </div>
        <div className='w-full prose-sm sm:prose prose-indigo max-w-none'>
          <MDXRemote {...source} components={MDXComponents} />
          <LastEdited dateString={frontMatter.lastEdited} />
        </div>
      </article>

      {/* <div className='w-full'>
          <DisqusComments
            identifier={`blog/${postId}`}
            title={frontMatter.title}
          />
        </div> */}
    </ThemeProvider>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getSlugData(params.id, 'blog')
  return {
    props: {
      headings: postData.headings,
      source: postData.mdxSource,
      frontMatter: postData.frontMatter,
      postId: params.id,
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
