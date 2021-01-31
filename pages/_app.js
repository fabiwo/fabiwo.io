import '../styles/core.scss'
import '../styles/components.scss'
import '../styles/utilities.scss'

import '../styles/prism-custom.scss'
import 'katex/dist/katex.min.css'

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
