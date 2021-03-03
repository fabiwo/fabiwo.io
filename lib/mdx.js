import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '@/components/MDXComponents'
import readTime from './readTime'
import getHeadings from './toc'


// var postsDirectory = path.join(process.cwd(), 'data/blog')

export function getSortedSlugs(dir = '') {
  // Get file names under /posts
  const postsDirectory = path.join(process.cwd(), 'data', dir)

  const fileNames = fs.readdirSync(postsDirectory)
  // Loop over all md files
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents)
    return {
      id,
      ...data,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } 
      return -1
    
  })
}

export function getAllSlugIds(dir = '') {
  const postsDirectory = path.join(process.cwd(), 'data', dir)

  const posts = fs.readdirSync(postsDirectory)
  return posts.map((post) => ({
      params: {
        id: post.replace(/\.mdx$/, ''),
      },
    }))
}

export async function getSlugData(id, dir = '') {
  const postsDirectory = path.join(process.cwd(), 'data', dir)

  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  // const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-code-titles'),
        require('remark-prism'),
        // require('remark-capitalize'),
      ],
      rehypePlugins: [require('rehype-slug')],
    },
  })

  // Calculate read time based on
  const contentReadTime = Math.ceil(readTime(content)).toFixed(0)
  const readTimeString = `${contentReadTime} min`

  const headings = getHeadings(content)
  const fullId = path.join(dir, id)

  return {
    id: {
      full: fullId,
      slug: id,
    },
    mdxSource,
    headings,
    frontMatter: { readTimeString, ...data },
  }
}
