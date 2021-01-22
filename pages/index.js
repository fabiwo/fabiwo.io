import Head from 'next/head'
import MainLayout, { siteTitle } from '../layouts/Blog'
import ResponsiveSectionHeading from '../components/atoms/ResponsiveSectionHeading'
import ProjectItem from '../components/molecules/ProjectItem'
import BlogPostCard from '../components/molecules/BlogPostCard'
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
      <section className='mb-20'>
        <h1 className='text-5xl font-bold mb-7'>Hey, I 'm Fabian Wolff</h1>{' '}
        <h2 className='text-lg text-gray-600 '>
          I'm a chemical engineer 🧪 and aspiring developer 👾. I created this
          blog to document my journey, share information and showcase my work!
        </h2>
      </section>
      <ResponsiveSectionHeading text={'BLOG'} />
      <PageSection>
        <ul>
          {newesPosts.map((post, i) => (
            <BlogPostCard key={i} {...post} />
          ))}
        </ul>
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
  const allPostsData = getSortedSlugs('blog-posts')
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
