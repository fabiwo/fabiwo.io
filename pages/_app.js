import '../styles/core.scss'
import '../styles/components.scss'
import '../styles/utilities.scss'

import '../styles/prism-custom.scss'
import 'katex/dist/katex.min.css'

// For ganalytics
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
