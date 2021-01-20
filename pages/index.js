import Head from 'next/head'
import MainLayout, { siteTitle } from '../layouts/Blog'
import ResponsiveSectionHeading from '../components/ResponsiveSectionHeading'
import ProjectItem from '../components/ProjectItem'
import BlogPostCard from '../components/BlogPostCard'
import HomeSection from '../layouts/HomeSection'
import ContentLayout from '../layouts/ContentLayout'
import NewsletterForm from '../components/NewsletterForm'
import { getSortedSlugs } from '../lib/mdx'

const title = 'Fabian Wolff'

export default function Home({ newesPosts, allProjectData, API_KEY }) {
  return (
    <MainLayout home={true}>
      {/* Initialize head of page with title etc. */}{' '}
      <Head>
        <title> {title} </title>
      </Head>
      <ContentLayout>
        {/* Was steht im Main Block */} {/* Blog Post Section */}{' '}
        <section className='mb-20'>
          <h1 className='text-5xl font-bold mb-7'>Hey, I 'm Fabian Wolff</h1>{' '}
          <h2 className='text-lg text-gray-600 '>
            I'm a chemical engineer 🧪 and aspiring developer 👾. I created this
            blog to document my journey, share information and showcase my work!
          </h2>
        </section>
        <ResponsiveSectionHeading text={'BLOG'} />
        <HomeSection>
          <ul>
            {newesPosts.map((post, i) => (
              <BlogPostCard key={i} {...post} />
            ))}
          </ul>
        </HomeSection>
        <ResponsiveSectionHeading text={'PROJECTS'} />
        <HomeSection>
          {allProjectData.map((project, i) => (
            <ProjectItem key={i} {...project} />
          ))}
        </HomeSection>
        <NewsletterForm API_KEY={API_KEY} />
      </ContentLayout>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedSlugs('blog-posts')
  const allProjectData = getSortedSlugs('projects')
  const nNewest = 3
  const newesPosts = allPostsData.splice(0, nNewest)
  const API_KEY = process.env.BUTTONDOWN_API_KEY
  return {
    props: {
      newesPosts,
      allProjectData,
      API_KEY,
    },
  }
}
