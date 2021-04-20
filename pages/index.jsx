import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/layouts/SectionHeading'
import ProjectCardBig from '@/components/Cards/ProjectItem'
import { SimpleBlogPost } from '@/components/Cards/BlogPostCard'
import PostContainer from '@/layouts/PostContainer'
import PageSection from '@/layouts/PageSection'
import { getSortedSlugs } from '@/lib/mdx'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'

export default function Home({ newesPosts, allProjectData }) {
  return (
    <ThemeProvider>
      <NextSeo title='Home' canonical='https://fabiwo.io/' />
      <MainLayout>
        <section className='flex flex-col justify-center w-full mb-20 text-center'>
          <div className='flex justify-center w-full mb-14'>
            <Image
              src='/static/images/fabiwo.jpg'
              alt='No entries found placeholder'
              width={150}
              height={150}
              className='object-cover rounded-full'
              quality={100}
            />
          </div>
          <h1 className='mb-5 text-5xl font-black md:text-6xl'>
            Hi. I&rsquo;m Fabian.
          </h1>
          <h2 className='text-lg text-gray-800 dark:text-gray-200'>
            A chemical engineer and self taught developer.
          </h2>
          <h2 className='text-lg text-gray-800 dark:text-gray-200'>
            I write about solving things with code!😎
          </h2>
          <div className='flex items-center justify-center mt-5 space-x-5'>
            <Link href='/about'>
              <button
                type='button'
                className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-44'
              >
                More about me
              </button>
            </Link>
            <a
              className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-44'
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:fabiandwolff@gmail.com'
            >
              Get in touch
            </a>
          </div>
        </section>
        <SectionHeading>BLOG</SectionHeading>
        <PageSection>
          <PostContainer>
            {newesPosts.map((post) => (
              <SimpleBlogPost
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                date={post.date}
              />
            ))}
          </PostContainer>
        </PageSection>
        <SectionHeading>PROJECTS</SectionHeading>
        <PageSection>
          {allProjectData.map((project) => (
            <ProjectCardBig
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              alt={project.alt}
              href={project.href}
              tools={project.tools}
            />
          ))}
        </PageSection>
      </MainLayout>
    </ThemeProvider>
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
