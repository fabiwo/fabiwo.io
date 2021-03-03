const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

;

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const staticPages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/api',
    '!pages/blog/',
  ])

  const dynamicPages = await globby(['data/blog/*{.mdx, .md}'])

  const allPages = [...staticPages, ...dynamicPages]

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${allPages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('data', '')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                const route = path === '/index' ? '' : path

                return `
                        <url>
                            <loc>${`https://fabiwo.io${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
