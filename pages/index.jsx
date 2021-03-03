import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/layouts/SectionHeading'
import ProjectItem from '@/components/Cards/ProjectItem'
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
          <h1 className='mb-5 text-6xl font-black'>Hi. I&rsquo;m Fabian.</h1>
          <h2 className='text-lg text-gray-800 dark:text-gray-200'>
            A chemical engineer and self taught front-end developer.
          </h2>
          <h2 className='text-lg text-gray-800 dark:text-gray-200'>
            I write about solving things with code!😎
          </h2>
          <div className='flex items-center justify-center space-x-5'>
            <Link href='/about'>
              <button
                type='button'
                className='flex items-center justify-center px-4 py-2 mt-5 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-md shadow hover:bg-blue-600 dark:bg-blue-600 w-44 dark:hover:bg-blue-700 active:shadow-lg active:bg-blue-700 focus:outline-none '
              >
                More about me
              </button>
            </Link>
            <a
              className='flex items-center justify-center px-4 py-2 mt-5 font-semibold text-white transition duration-300 ease-in-out bg-purple-500 rounded-md shadow hover:bg-purple-600 dark:bg-purple-600 w-44 dark:hover:bg-purple-700 active:shadow-lg active:bg-blue-700 focus:outline-none'
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:fabiandwolff@gmail.com'
            >
              Get in touch
              <svg
                height='20'
                width='20'
                fill='none'
                className='w-5 h-5 ml-1 fill-current'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L13.7071 14.7071C13.3166 15.0976 12.6834 15.0976 12.2929 14.7071C11.9024 14.3166 11.9024 13.6834 12.2929 13.2929L14.5858 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z'
                  fillRule='evenodd'
                />
              </svg>
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
            <ProjectItem
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
