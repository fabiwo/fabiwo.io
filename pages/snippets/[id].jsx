import ThemeProvider from '@/layouts/ThemeProvider'
import MainLayout from '@/layouts/MainLayout'
import { getAllSlugIds, getSlugData } from '@/lib/mdx'
import { v4 as uuidv4 } from 'uuid'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

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
          // images: [
          //   {
          //     url: `https://fabiwo.io/${frontMatter.images[0].path}`,
          //     width: 800,
          //     height: 600,
          //     alt: frontMatter.alt,
          //   },
          // ],
        }}
        twitter={{
          handle: '@ffabiwo',
          site: '@ffabiwo',
          cardType: 'summary_large_image',
        }}
      />
      <MainLayout>
        <article className='w-full max-w-2xl mx-auto mb-10'>
          <div className='flex items-start justify-between w-full mb-8'>
            <div>
              <h1 className='mb-1 text-3xl font-bold md:text-5xl'>
                {frontMatter.title}
              </h1>
              <p className='mb-5 text-lg text-gray-800'>
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

          <section className='w-full prose prose-blue max-w-none'>
            <MDXRemote {...source} components={MDXComponents} />
          </section>
        </article>
      </MainLayout>
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
