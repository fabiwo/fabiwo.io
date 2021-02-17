import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '@/layouts/MainLayout'
import PageSection from '@/layouts/PageSection'
import ResponsiveSectionHeading from '@/components/atoms/ResponsiveSectionHeading'
import BlogPostCard, {
  NewestBlogPostCard,
  SimpleBlogPost,
} from '@/molecules/BlogPostCard'
import PostContainer from '@/components/atoms/PostContainer'
import Centre from '@/components/atoms/Centre'
//import SearchBar from '@/components/atoms/SearchBar'
import FoundTag from '@/components/atoms/FoundTag'
import SeoProvider from '@/layouts/SeoProvider'

import { getSortedSlugs } from '@/lib/mdx'

const title = 'Fabian Wolff - Blog'

export default function Blog({ allPostsData }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <SeoProvider>
      <MainLayout>
        {/* Initialize head of page with title etc. */}{' '}
        <Head>
          <title> {title} </title>
        </Head>
        {/* <ResponsiveSectionHeading text={'🔥 MOST RECENT 🔥'} />
      <PageSection>
        <NewestBlogPostCard {...allPostsData[0]} />
      </PageSection> */}
        <ResponsiveSectionHeading text={'ALL POSTS'} />
        <p className='mb-10 text-lg text-gray-800 dark:text-gray-100'>
          Search through all my posts 🔍
        </p>
        <div className='relative w-full mb-3'>
          <input
            aria-label='Search articles'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search articles'
            className='w-full px-4 py-3 rounded-md shadow-lg dark:text-outer-space-300 dark:border-transparent dark:bg-outer-space-700 dark:placeholder-outer-space-400 dark:focus:bg-outer-space-800 active:ring-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
          ></input>
          <svg
            className='absolute w-5 h-5 text-gray-400 right-4 top-4 dark:text-gray-300'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <FoundTag number={filteredBlogPosts.length} />
        <section className='w-full mb-10'>
          {!filteredBlogPosts.length && (
            <Centre>
              <Image
                src='/static/images/astronaut.svg'
                alt='No entries found placeholder'
                width={500}
                height={500}
              />
            </Centre>
          )}
          <PostContainer>
            {filteredBlogPosts.map((post, i) => (
              <SimpleBlogPost key={i} {...post} />
            ))}
          </PostContainer>
        </section>
      </MainLayout>
    </SeoProvider>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedSlugs('blog')
  return {
    props: {
      allPostsData,
    },
  }
}
