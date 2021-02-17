import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import Centre from '@/atoms/Centre'
import ResponsiveSectionHeading from '@/components/atoms/ResponsiveSectionHeading'
import ProjectItem from '@/molecules/ProjectItem'
import BlogPostCard, { SimpleBlogPost } from '@/molecules/BlogPostCard'
import PostContainer from '@/components/atoms/PostContainer'
import PageSection from '@/layouts/PageSection'
import { getSortedSlugs } from '@/lib/mdx'
import SeoProvider from '@/layouts/SeoProvider'

const title = 'Fabian Wolff'

export default function Home({ newesPosts, allProjectData }) {
  return (
    <SeoProvider>
      <MainLayout home={true}>
        {/* Initialize head of page with title etc. */}{' '}
        <Head>
          <title> {title} </title>
        </Head>
        {/* Was steht im Main Block */} {/* Blog Post Section */}{' '}
        <section className='flex flex-col justify-center w-full mb-20 text-center'>
          <div className='flex justify-center w-full mb-5'>
            <Image
              src='/static/images/fabiwo.jpg'
              alt='No entries found placeholder'
              width={175}
              height={175}
              className='object-cover rounded-full'
              quality={100}
            />
          </div>
          <h1 className='text-5xl font-bold mb-7 dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-500 dark:to-green-500'>
            Hi, I 'm Fabian Wolff
          </h1>{' '}
          <h2 className='text-lg text-gray-600 dark:text-gray-200'>
            I'm a chemical engineer and self-taught developer.😎
          </h2>
          <h2 className='text-lg text-gray-600 dark:text-gray-200'>
            I write about solving things with code!
          </h2>
          <Link href='/about'>
            <button className='px-4 py-2 mx-auto mt-5 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-md shadow w-44 hover:bg-blue-600 active:shadow-lg active:bg-blue-700 focus:outline-none '>
              More about me
            </button>
          </Link>
        </section>
        <ResponsiveSectionHeading text={'BLOG'} />
        <PageSection>
          <PostContainer>
            {newesPosts.map((post, i) => (
              <SimpleBlogPost key={i} {...post} />
            ))}
          </PostContainer>
        </PageSection>
        <ResponsiveSectionHeading text={'PROJECTS'} />
        <PageSection>
          {allProjectData.map((project, i) => (
            <ProjectItem key={i} {...project} />
          ))}
        </PageSection>
      </MainLayout>
    </SeoProvider>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedSlugs('blog')
  const allProjectData = getSortedSlugs('projects')
  const nNewest = 3
  const newesPosts = allPostsData.splice(0, nNewest)
  return {
    props: {
      newesPosts,
      allProjectData,
    },
  }
}
