import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export default async function markdownToHtml(matterResult) {
  // Use remark to convert markdown into HTML string
  const result = await remark()
    .use(html)
    .use(prism)
    .process(matterResult.content)

  return result.toString()
}
