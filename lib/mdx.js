import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MDXComponents from '@/components/MDXComponents'
// import readTime from './readTime'
import readingTime from 'reading-time'
import getHeadings from './toc'
import { serialize } from 'next-mdx-remote/serialize'
import externalLinks from 'remark-external-links'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeSlug from 'rehype-slug'
import remarkCapitalize from 'remark-capitalize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import toc from '@jsdevtools/rehype-toc'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

export function getSortedSlugs(dir = '') {
  // Get file names under /posts
  const postsDirectory = path.join(process.cwd(), 'data', dir)

  const fileNames = fs.readdirSync(postsDirectory)
  // Loop over all files
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const content = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data } = matter(content)

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
  const fullPath = path.join(process.cwd(), 'data', dir, `${id}.mdx`)

  const source = fs.readFileSync(fullPath, 'utf8')

  const mdxSource = await serialize(source, {
    components: MDXComponents,
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        remarkGfm,
        // remarkCapitalize,
        [externalLinks, { target: '_blank' }],
      ],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism,
        rehypeSlug,
        rehypeKatex,
        // [
        //   toc,
        //   {
        //     headings: ['h1', 'h2'],
        //   },
        // ],
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
    },
  })

  // Additional processing
  // Calculate read time based on
  const time = readingTime(source)
  const headings = getHeadings(source)
  const fullId = path.join(dir, id)
  const stats = fs.statSync(fullPath)
  let lastEdited = new Date(stats.mtime)
  lastEdited = lastEdited.toISOString().split('T')[0]

  return {
    id: {
      full: fullId,
      slug: id,
    },
    mdxSource,
    headings,
    frontMatter: {
      ...mdxSource.frontmatter,
      readTime: time.minutes,
      words: time.words,
      lastEdited,
    },
  }
}
