import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../layouts/Blog'
import ContentLayout from '../layouts/ContentLayout'
import HomeSection from '../layouts/HomeSection'
import ResponsiveSectionHeading from '../components/atoms/ResponsiveSectionHeading'
import BlogPostCard, {
  NewestBlogPostCard,
} from '../components/molecules/BlogPostCard'
import Centre from '../components/atoms/Centre'
//import SearchBar from '../components/atoms/SearchBar'
import FoundTag from '../components/atoms/FoundTag'
import NewsletterForm from '../components/molecules/NewsletterForm'

import { getSortedSlugs } from '../lib/mdx'

const title = 'Fabian Wolff - Blog'

export default function Blog({ allPostsData }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <MainLayout>
      {/* Initialize head of page with title etc. */}{' '}
      <Head>
        <title> {title} </title>
      </Head>
      <ContentLayout>
        <ResponsiveSectionHeading text={'🔥 MOST RECENT 🔥'} />
        <HomeSection>
          <NewestBlogPostCard {...allPostsData[0]} />
        </HomeSection>

        <ResponsiveSectionHeading text={'ALL POSTS'} />
        <p className='mb-4'>
          I've been writing online since 2014, mostly about web development and
          tech careers. In total, I've written articles on this site. Use the
          search below to filter by title.
        </p>
        <div className='relative w-full mb-3'>
          <input
            aria-label='Search articles'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search articles'
            className='block w-full px-4 py-3 text-gray-900 bg-white border border-blue-100 rounded-md shadow focus:outline-none focus:ring-2 focus:border-blue-300'
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
        <section className='w-full'>
          {!filteredBlogPosts.length && (
            <Centre>
              <Image
                src='/images/astronaut.svg'
                alt='Picture of the author'
                width={500}
                height={500}
              />
            </Centre>
          )}
          <ul>
            {filteredBlogPosts.map((post, i) => (
              <BlogPostCard key={i} {...post} />
            ))}
          </ul>
        </section>
        <NewsletterForm />
      </ContentLayout>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedSlugs('blog-posts')
  return {
    props: {
      allPostsData,
    },
  }
}
