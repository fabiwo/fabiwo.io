import ThemeProvider from '@/layouts/ThemeProvider'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export default function About() {
  return (
    <ThemeProvider>
      <NextSeo title='About' canonical='https://fabiwo.io/about' />
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto'>
        <article className='flex flex-wrap-reverse w-full mb-10'>
          <section className='prose-sm sm:prose'>
            <p>
              Hey, I’m Fabian. I am located in Mannheim 📍 and currently pursue
              a master&rsquo;s degree in Chemical Engineering 🧪. I am really
              passionate about
              <strong> web technologies</strong>,
              <strong> creating things with code</strong> , and
              <strong> solving problems</strong>. When I am not coding I like to
              spend my free time with:
            </p>
            <ul>
              <li>Weighted Calisthenics 🏋️‍♂️</li>
              <li>Slacklining 🧵</li>
              <li>Taking care of my chili plants 🌶️</li>
            </ul>
            {/* <SectionHeading>I am passionate about</SectionHeading>
            <section className='mb-10'>
              <span className='mr-1 font-mono items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800'>
                Computer-aided process engineering
              </span>
              <span className='mr-1 font-mono items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800'>
                Flow chemistry
              </span>
              <span className='mr-1 font-mono items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800'>
                Lab automation
              </span>
              <span className='font-mono mb-1 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800'>
                Micro process engineering
              </span>
              <span className='font-mono mb-1 items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800'>
                Computational Fluid Dynamics
              </span>
            </section> */}
            <p>
              I discovered my passion for programming during my thesis where I
              taught myself Matlab to automate the experimental data analysis.
              Since then I fell in love with learning new programming languages
              and frameworks
            </p>
            <p>
              I would love to share my journey with you and provide information
              I wish somebody wrote down when I was learning.
            </p>
            <p>
              You can expect posts about <strong>chemical engineering</strong>,
              <strong>development</strong>, and
              <strong>personal projects</strong> I am working on.
            </p>
            <p>
              I would love to connect with you! Write me
              <a
                className='inline'
                href='https://twitter.com/ffabiwo'
                target='_blank'
                rel='noreferrer'
              >
                @ffabiwo
              </a>
            </p>
          </section>
          <div className='mb-5 mx-auto sm:mx-0'>
            <Image
              src='/static/images/fabiwo.jpg'
              alt='No entries found placeholder'
              width={225}
              height={225}
              className='object-cover rounded-md'
              quality={100}
            />
          </div>
        </article>
      </div>
    </ThemeProvider>
  )
}
