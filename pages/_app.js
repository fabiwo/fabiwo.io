import '../styles/core.scss'
import '../styles/components.scss'
import '../styles/utilities.scss'

import '../styles/prism-custom.scss'
import 'katex/dist/katex.min.css'

import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <DefaultSeo
        titleTemplate='Fabian Wolff - %s'
        canonical='https://fabiwo.io/'
        description="This is Fabian's Blog where I solve problems with code"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://fabiwo.io/',
          site_name: 'Fabian Wolff',
          title: 'Fabian Wolff - Chemical Engineer, Developer, Problem Solver',
        }}
        twitter={{
          handle: '@ffabiwo',
          site: '@ffabiwo',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <script
          async
          defer
          data-domain='fabiwo.io'
          src='https://plausible.io/js/plausible.js'
        ></script>
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
