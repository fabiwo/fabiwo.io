import Head from 'next/head'
import MainLayout from '../layouts/Blog'

const title = 'Fabian Wolff - Dashboard'

export default function Dashboard({}) {
  return (
    <MainLayout>
      {/* Initialize head of page with title etc. */}{' '}
      <Head>
        <title> {title} </title>
      </Head>
      <div>🚀 Hello dashboard 📈 </div>
    </MainLayout>
  )
}
