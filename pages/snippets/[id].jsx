import ThemeProvider from '@/layouts/ThemeProvider'
import { getAllSlugIds, getSlugData } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { LastEdited } from '@/components/Date'

const contentName = 'snippets'

export default function Snippet({ source, frontMatter, postId }) {
  return (
    <ThemeProvider>
      <NextSeo
        titleTemplate='%s'
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://fabiwo.io/${contentName}/${postId}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: frontMatter.date,
            tags: frontMatter.tags,
          },
          locale: 'en_IE',
          url: `https://fabiwo.io/${contentName}/${postId}`,
          site_name: 'Fabian Wolff',
          title: frontMatter.title,
        }}
        twitter={{
          handle: '@ffabiwo',
          site: '@ffabiwo',
          cardType: 'summary_large_image',
        }}
      />

      <article className='flex flex-col items-start justify-center w-full max-w-prose mx-auto mb-10'>
        <div className='flex items-start justify-between w-full mb-4'>
          <div>
            <h1 className='mb-1 text-3xl font-bold md:text-5xl'>
              {frontMatter.title}
            </h1>
            <p className='mb-5 text-lg text-zinc-800'>
              {frontMatter.description}
            </p>
          </div>
          <Image
            width={50}
            height={50}
            className='object-contain'
            src={frontMatter.icon}
          />
        </div>
        <div className='w-full prose-sm sm:prose prose-indigo max-w-none'>
          <MDXRemote {...source} components={MDXComponents} />
          <LastEdited dateString={frontMatter.lastEdited} />
        </div>
      </article>
    </ThemeProvider>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getSlugData(params.id, contentName)
  return {
    props: {
      source: postData.mdxSource,
      frontMatter: postData.frontMatter,
      postId: params.id,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllSlugIds(contentName)
  return {
    paths,
    fallback: false,
  }
}
