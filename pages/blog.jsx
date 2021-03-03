import React, { useState } from 'react'
import Image from 'next/image'
import MainLayout from '@/layouts/MainLayout'
import SectionHeading from '@/layouts/SectionHeading'
import { SimpleBlogPost } from '@/components/Cards/BlogPostCard'
import PostContainer from '@/layouts/PostContainer'
import Centre from '@/layouts/Centre'
import SearchBar from '@/components/Search/SearchBar'
import FoundTag from '@/components/Search/FoundTag'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'

import { getSortedSlugs } from '@/lib/mdx'

export default function Blog({ allPostsData }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <ThemeProvider>
      <MainLayout>
        <NextSeo title='Blog' canonical='https://fabiwo.io/blog' />
        <SectionHeading>BLOG</SectionHeading>
        <p className='mb-10 text-lg text-gray-800 dark:text-gray-100'>
          Search through all my posts 🔍
        </p>
        <SearchBar onChange={setSearchValue} />
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
            {filteredBlogPosts.map((post) => (
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
        </section>
      </MainLayout>
    </ThemeProvider>
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
