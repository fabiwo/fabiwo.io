import Head from 'next/head'
import MainLayout, { siteTitle } from '../layouts/Blog'
import Link from 'next/link'
import ResponsiveSectionHeading from '../components/atoms/ResponsiveSectionHeading'
import ProjectItem from '../components/molecules/ProjectItem'
import BlogPostCard from '../components/molecules/BlogPostCard'
import PostContainer from '../components/atoms/PostContainer'
import PageSection from '../layouts/PageSection'
import { getSortedSlugs } from '../lib/mdx'

const title = 'Fabian Wolff'

export default function Home({ newesPosts, allProjectData }) {
  return (
    <MainLayout home={true}>
      {/* Initialize head of page with title etc. */}{' '}
      <Head>
        <title> {title} </title>
      </Head>
      {/* Was steht im Main Block */} {/* Blog Post Section */}{' '}
      <section className='relative mb-20'>
        <h1 className='absolute left-0 text-5xl md:-left-20 -top-20 md:top-0'>
          👋
        </h1>{' '}
        <h1 className='text-5xl font-bold mb-7'>Hey, I 'm Fabian Wolff</h1>{' '}
        <h2 className='text-lg text-gray-600 '>
          I'm a chemical engineer and aspiring developer. I created this blog to
          document my journey, share information and showcase my work!
        </h2>
        <Link href='/about'>
          <button className='mt-5 btn--secondary'>More about me</button>
        </Link>
      </section>
      <ResponsiveSectionHeading text={'BLOG'} />
      <PageSection>
        <PostContainer>
          {newesPosts.map((post, i) => (
            <BlogPostCard key={i} {...post} />
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
