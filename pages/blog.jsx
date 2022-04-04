import React, { useState } from 'react'
import { SimpleBlogPost } from '@/components/Cards/BlogPostCard'
import PostContainer from '@/layouts/PostContainer'
import SearchBar from '@/components/Search/SearchBar'
import FoundTag from '@/components/Search/FoundTag'
import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'
import { getSortedSlugs } from '@/lib/mdx'
import { RouteHeading } from '@/layouts/SectionHeading'

export default function Blog({ allPostsData }) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <ThemeProvider>
      <NextSeo title='Blog' canonical='https://fabiwo.io/blog' />
      <RouteHeading>Blog</RouteHeading>
      <div className='flex flex-col justify-center items-start max-w-prose mx-auto'>
        <p className='mb-5 text-zinc-800'>
          Go through all my writings. Use the search below to filter by title.
        </p>
        <SearchBar onChange={setSearchValue} />
        <FoundTag number={filteredBlogPosts.length} />
        <section className='w-full mb-10'>
          {!filteredBlogPosts.length && <h1>No articles found!</h1>}
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
      </div>
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
