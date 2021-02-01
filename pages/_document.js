import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='shortcut icon' href='/static/favicons/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/favicons/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/static/favicons/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#df4f4f' />
        </Head>
        <body className='transition-colors duration-300 ease-out bg-gray-100 dark:bg-outer-space-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
