import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import ResponsiveSectionHeading from '@/components/atoms/ResponsiveSectionHeading'
import SeoProvider from '@/layouts/SeoProvider'
import NewsletterForm from '@/molecules/NewsletterForm'
import InlineLink from '@/atoms/InlineLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function About() {
  return (
    <SeoProvider>
      <MainLayout>
        <NextSeo title='About' canonical='https://fabiwo.io/about' />
        <ResponsiveSectionHeading text={'ABOUT ME'} />
        <article className='flex flex-wrap-reverse w-full mb-10'>
          <section className='prose dark:prose-dark'>
            <p>
              Hey, I’m Fabian. I am located in Mannheim 📍 and currently pursue
              a master's degree in Chemical Engineering 🧪. I am really
              passionate about
              <strong> web technologies</strong>,
              <strong> creating things with code</strong> , and{' '}
              <strong> solving problems</strong>. When I am not coding I like to
              spend my free time with:
            </p>
            <ul>
              <li>Weighted Calisthenics 🏋️‍♂️</li>
              <li>Slacklining 🧵</li>
              <li>Taking care of my chili plants 🌶️</li>
            </ul>
            <p>
              I discovered my passion for programming during my thesis where I
              taught myself Matlab to automate a bunch of experimental data
              analysis. Since then I fell in love with learning new programming
              languages and frameworks
            </p>
            <p>
              I would love to share my journey with you and provide information
              I wish somebody wrote down when I was learning.
            </p>
            <p>
              You can expect posts about <strong>chemical engineering</strong>,{' '}
              <strong>development</strong>, and{' '}
              <strong>personal projects</strong> I am working on.
            </p>
            <p>
              I would love to connect with you! Write me
              <InlineLink href='https://twitter.com/ffabiwo' text='@ffabiwo' />
            </p>
          </section>
          <div className='flex flex-col mx-auto mb-10'>
            <Image
              src='/static/images/fabiwo.jpg'
              alt='No entries found placeholder'
              width={225}
              height={225}
              className='object-cover rounded-full'
              quality={100}
            />
          </div>
        </article>
      </MainLayout>
    </SeoProvider>
  )
}
