import Head from 'next/head'
import AboutLayout from '../layouts/AboutLayout'
import ResponsiveSectionHeading from '../components/atoms/ResponsiveSectionHeading'
import SeoProvider from '../layouts/SeoProvider'
import NewsletterForm from '../components/molecules/NewsletterForm'

import Image from 'next/image'

const title = 'Fabian Wolff - About Me'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function About() {
  return (
    <SeoProvider>
      <AboutLayout>
        {/* Initialize head of page with title etc. */}{' '}
        <Head>
          <title> {title} </title>
        </Head>
        <ResponsiveSectionHeading text={'ABOUT ME'} />
        <article className='flex flex-wrap-reverse w-full mb-10'>
          <section className='prose'>
            <p>
              Hey, I’m Fabian. I am located in Mannheim 📍 and currently pursue
              a master's degree in Chemical Engineering. I am really passionate
              about
              <strong> web technologies</strong>,<strong> creating</strong>{' '}
              things with code, and <strong> solving</strong> problems. When I
              am not coding I like to spend my free time with:
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
              I wish somebody wrote down when I was learning. You can expect
              posts about chemical engineering, development, and personal
              projects I am working on.
            </p>
            <p>
              If you want to know more about me and my journey you can subscribe
              to my newsletter or hit me up on social media!
            </p>
          </section>
          <div className='flex flex-col mb-10 md:ml-5'>
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
        <div className='max-w-2xl'>
          <NewsletterForm />
        </div>
      </AboutLayout>
    </SeoProvider>
  )
}
