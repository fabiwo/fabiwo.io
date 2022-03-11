const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const staticPages = globby
    .sync([
      'pages/**/*{.jsx,.mdx}',
      '!pages/_*.js',
      '!pages/*/[*]{.jsx,.mdx}',
      '!pages/api',
      '!pages/blog/',
    ])
    .filter((d) => !d.includes('['))

  const dynamicDirs = ['blog', 'projects', 'snippets', 'projects/observable']
  const dynamicPages = dynamicDirs
    .map((d) => globby.sync([`data/${d}/*{.mdx, .md}`]))
    .flat()

  const allPages = [...staticPages, ...dynamicPages]

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${allPages
              .map((page) => {
                const path = page
                  .split('.')[0]
                  .replace('data', '')
                  .replace('pages', '')
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
