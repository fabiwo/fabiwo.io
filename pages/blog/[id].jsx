import ThemeProvider from '@/layouts/ThemeProvider'
import { LastEdited } from '@/components/Date'
import { getAllSlugIds, getSlugData } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { parseISO, format } from 'date-fns'

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
      <article className='flex flex-col items-start justify-center w-full max-w-prose mx-auto mb-10'>
        <h1 className='text-2xl font-semibold md:text-5xl'>
          {frontMatter.title}
        </h1>
        <div className='flex flex-col py-5 md:flex-row justify-between w-full'>
          <div className='flex space-x-2 items-center'>
            <div className='flex items-center'>
              <Image
                alt='Fabian Wolff'
                height={25}
                width={25}
                src='/static/images/fabiwo.jpg'
                className='rounded-full object-cover'
              />
            </div>
            <p className='text-xs'>
              {`${frontMatter.author} / `}
              {`${format(parseISO(frontMatter.date), 'dd. LLLL yyyy')}`}
            </p>
          </div>
          <p className='text-xs mt-2'>{`${frontMatter.readTime.toFixed(
            0,
          )} min read`}</p>
        </div>
        {frontMatter.image ? (
          <div className='mb-5 w-full'>
            <Image
              width={500}
              height={500 / (16 / 10)}
              layout='responsive'
              className='object-cover'
              src={frontMatter.image}
              alt={frontMatter.alt}
              priority='true'
            />
          </div>
        ) : null}

        <div className='flex flex-col w-full prose-sm sm:prose prose-indigo max-w-prose'>
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
