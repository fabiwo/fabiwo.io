import '../styles/core.scss'
import '../styles/utilities.scss'
import '../styles/prism/prism-nord.scss'
import '../styles/prism/highlight.scss'
import 'katex/dist/katex.min.css'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate='%s - Fabian Wolff'
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
        <Script id='plausible' src='https://plausible.io/js/plausible.js' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
