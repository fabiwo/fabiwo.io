import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import SectionHeading from '@/layouts/SectionHeading'
import { SimpleBlogPost } from '@/components/Cards/BlogPostCard'
import PostContainer from '@/layouts/PostContainer'
import { getSortedSlugs } from '@/lib/mdx'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'

export default function Home({ featuredPosts, allProjectData }) {
  return (
    <ThemeProvider>
      <NextSeo title='Home' canonical='https://fabiwo.io/' />
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto'>
        <div className='flex flex-col-reverse items-start w-full sm:flex-row mb-12'>
          <div className='pr-8'>
            <h1 className='mb-1 text-3xl font-bold sm:text-5xl'>
              Fabian Wolff
            </h1>
            <h2 className='mb-4 text-zinc-800 text-sm sm:text-base'>
              Chemical Engineering Student
            </h2>
            <p className='text-zinc-700 text-sm sm:text-base'>
              Passionate about the intersection between engineering, science,
              and computers
            </p>
          </div>
          <div className='w-[125px] sm:w-[176px] relative mb-8 sm:mb-0 sm:mr-auto m-auto'>
            <Image
              src='/static/images/fabiwo.jpg'
              alt='profile image'
              width={125}
              height={125}
              className='object-cover rounded-lg'
              quality={100}
            />
          </div>
        </div>
        <h1 className='text-lg font-bold text-zinc-900'>Writing</h1>
        <section className='w-full mb-6 py-4'>
          <PostContainer>
            {featuredPosts.map((post) => (
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
          {/* <a
          className='flex h-6 mt-4 leading-5 text-zinc-500 transition-all rounded-lg hover:text-zinc-800'
          href='/blog'
        >
          Read all posts
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='w-6 h-6 ml-1'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z'
            ></path>
          </svg>
        </a> */}
        </section>
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedSlugs('blog')
  const allProjectData = getSortedSlugs('projects')

  // N newest posts
  // const nNewest = 1
  // const recentPost = allPostsData.splice(0, nNewest)

  // Declare which posts you would like to have featured by id
  // const featuredIds = ['download-the-dom', 'ternary-equilibrium']
  // let featuredPosts = []
  // for (let id of featuredIds) {
  //   const match = allPostsData.filter((post) => post.id === id)
  //   featuredPosts.push(match[0])
  // }

  //! For now only show all posts until more are produced
  const featuredPosts = allPostsData

  return {
    props: {
      featuredPosts,
      allProjectData,
    },
  }
}
