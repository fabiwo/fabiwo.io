import ThemeProvider from '@/layouts/ThemeProvider'
import MainLayout from '@/layouts/MainLayout'
import { getAllSlugIds, getSlugData } from '@/lib/mdx'
import { v4 as uuidv4 } from 'uuid'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Post({ source, headings, frontMatter, postId }) {
  return (
    <ThemeProvider>
      <NextSeo
        titleTemplate='%s'
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://fabiwo.io/projects/${postId}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: frontMatter.date,
            tags: frontMatter.tags,
          },
          locale: 'en_IE',
          url: `https://fabiwo.io/projects/${postId}`,
          site_name: 'Fabian Wolff',
          title: frontMatter.title,
          images: [
            {
              url: `https://fabiwo.io/${frontMatter.images[0].path}`,
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
      <MainLayout withNewsletter={false}>
        <article className='w-full max-w-3xl mx-auto mb-10 '>
          <h1 className='text-3xl font-bold md:text-5xl'>
            {frontMatter.title}
          </h1>
          <div className='inline-flex items-center mt-5 space-x-2'>
            <Image
              alt='Fabian Wolff'
              height={35}
              width={35}
              src='/static/images/fabiwo.jpg'
              className='rounded-full'
            />
            <p className='text-sm font-semibold'>
              {frontMatter.author ? frontMatter.author : 'Fabian Wolff'}
            </p>
          </div>
          <section className='w-full my-5 prose prose-blue max-w-none'>
            <MDXRemote {...source} components={MDXComponents} />
          </section>
          <div className='grid grid-cols-3 gap-4 mb-10'>
            <div>
              <h2 className='font-semibold'>PROJECT TYPE</h2>
              <ul>
                {frontMatter.types.map((type) => (
                  <li key={uuidv4()}>{type}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='font-semibold'>TECHNOLOGIES</h2>
              <ul>
                {frontMatter.technologies.map((technology) => (
                  <li key={uuidv4()}>{technology.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='font-semibold'>Links</h2>
              <div className='flex flex-col'>
                <a
                  className='inline'
                  href={frontMatter.href}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center text-indigo-600'
                >
                  <svg
                    height='24'
                    width='24'
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 mr-1.5 stroke-current'
                  >
                    <path
                      d='M13.8284 10.1716C12.2663 8.60948 9.73367 8.60948 8.17157 10.1716L4.17157 14.1716C2.60948 15.7337 2.60948 18.2663 4.17157 19.8284C5.73367 21.3905 8.26633 21.3905 9.82843 19.8284L10.93 18.7269M10.1716 13.8284C11.7337 15.3905 14.2663 15.3905 15.8284 13.8284L19.8284 9.82843C21.3905 8.26633 21.3905 5.73367 19.8284 4.17157C18.2663 2.60948 15.7337 2.60948 14.1716 4.17157L13.072 5.27118'
                      strokeLinecap='round'
                      strokeWidth='2'
                    />
                  </svg>
                  Website
                </a>
                <a
                  className='inline'
                  href={frontMatter.post}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center text-indigo-600'
                >
                  <svg
                    height='24'
                    width='24'
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 mr-1.5 stroke-current'
                  >
                    <path
                      d='M13.8284 10.1716C12.2663 8.60948 9.73367 8.60948 8.17157 10.1716L4.17157 14.1716C2.60948 15.7337 2.60948 18.2663 4.17157 19.8284C5.73367 21.3905 8.26633 21.3905 9.82843 19.8284L10.93 18.7269M10.1716 13.8284C11.7337 15.3905 14.2663 15.3905 15.8284 13.8284L19.8284 9.82843C21.3905 8.26633 21.3905 5.73367 19.8284 4.17157C18.2663 2.60948 15.7337 2.60948 14.1716 4.17157L13.072 5.27118'
                      strokeLinecap='round'
                      strokeWidth='2'
                    />
                  </svg>
                  Blog Post
                </a>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            {frontMatter.images.map((image) => (
              <Image
                width={500}
                height={500 / (16 / 10)}
                layout='responsive'
                className='object-cover'
                src={image.path}
                alt={image.alt}
                priority='true'
                key={uuidv4()}
              />
            ))}
          </div>
        </article>
      </MainLayout>
    </ThemeProvider>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getSlugData(params.id, 'projects')
  return {
    props: {
      source: postData.mdxSource,
      frontMatter: postData.frontMatter,
      postId: params.id,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllSlugIds('projects')
  return {
    paths,
    fallback: false,
  }
}
