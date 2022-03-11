import github from 'public/static/images/social/github.svg'
import mail from 'public/static/images/social/mail.svg'
import linkedin from 'public/static/images/social/linkedin.svg'
import observablehq from 'public/static/images/social/observablehq.svg'
import twitter from 'public/static/images/social/twitter.svg'

const SocialLink = ({ children, href }) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={href}
    className='transition duration-300 ease-out transform cursor-pointer text-zinc-400 hover:scale-110 md:h-11 md:w-11 hover:text-zinc-800'
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className='flex flex-col items-center w-full max-w-2xl mb-10 mx-auto'>
      {/* <hr className='w-4/5 mb-8 border-zinc-300 border-1' /> */}
      <div className='flex justify-center space-x-3 sm:space-x-0'>
        <SocialLink href='https://github.com/fabiwo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            className='w-6 h-6'
            fill='currentColor'
          >
            <path d='M8 0.198c-4.42 0-8 3.582-8 8 0 3.535 2.292 6.533 5.47 7.59 0.4 0.075 0.547-0.172 0.547-0.385 0-0.19-0.007-0.693-0.010-1.36-2.225 0.483-2.695-1.073-2.695-1.073-0.364-0.923-0.89-1.17-0.89-1.17-0.725-0.496 0.056-0.486 0.056-0.486 0.803 0.056 1.225 0.824 1.225 0.824 0.713 1.223 1.873 0.87 2.33 0.665 0.072-0.517 0.278-0.87 0.507-1.070-1.777-0.2-3.644-0.888-3.644-3.953 0-0.873 0.31-1.587 0.823-2.147-0.090-0.202-0.36-1.015 0.070-2.117 0 0 0.67-0.215 2.2 0.82 0.64-0.178 1.32-0.266 2-0.27 0.68 0.004 1.36 0.092 2 0.27 1.52-1.035 2.19-0.82 2.19-0.82 0.43 1.102 0.16 1.915 0.080 2.117 0.51 0.56 0.82 1.273 0.82 2.147 0 3.073-1.87 3.75-3.65 3.947 0.28 0.24 0.54 0.731 0.54 1.48 0 1.071-0.010 1.931-0.010 2.191 0 0.21 0.14 0.46 0.55 0.38 3.201-1.049 5.491-4.049 5.491-7.579 0-4.418-3.582-8-8-8z' />
          </svg>
        </SocialLink>
        <SocialLink href='https://observablehq.com/@fawol'>
          <svg
            role='img'
            viewBox='0 0 25 28'
            width='25'
            height='28'
            aria-label='Observable'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              d='M12.5 22.6667C11.3458 22.6667 10.3458 22.4153 9.5 21.9127C8.65721 21.412 7.98339 20.7027 7.55521 19.8654C7.09997 18.9942 6.76672 18.0729 6.56354 17.1239C6.34796 16.0947 6.24294 15.0483 6.25 14C6.25 13.1699 6.30417 12.3764 6.41354 11.6176C6.52188 10.8598 6.72292 10.0894 7.01563 9.30748C7.30833 8.52555 7.68542 7.84763 8.14479 7.27274C8.62304 6.68378 9.24141 6.20438 9.95208 5.87163C10.6979 5.51244 11.5458 5.33333 12.5 5.33333C13.6542 5.33333 14.6542 5.58467 15.5 6.08733C16.3428 6.588 17.0166 7.29733 17.4448 8.13459C17.8969 8.99644 18.2271 9.9103 18.4365 10.8761C18.6448 11.841 18.75 12.883 18.75 14C18.75 14.8301 18.6958 15.6236 18.5865 16.3824C18.4699 17.1702 18.2639 17.9446 17.9719 18.6925C17.6698 19.4744 17.2948 20.1524 16.8427 20.7273C16.3906 21.3021 15.7927 21.7692 15.0479 22.1284C14.3031 22.4876 13.4542 22.6667 12.5 22.6667ZM14.7063 16.2945C15.304 15.6944 15.6365 14.864 15.625 14C15.625 13.1073 15.326 12.3425 14.7292 11.7055C14.1313 11.0685 13.3885 10.75 12.5 10.75C11.6115 10.75 10.8688 11.0685 10.2708 11.7055C9.68532 12.3123 9.36198 13.1405 9.375 14C9.375 14.8927 9.67396 15.6575 10.2708 16.2945C10.8688 16.9315 11.6115 17.25 12.5 17.25C13.3885 17.25 14.124 16.9315 14.7063 16.2945ZM12.5 27C19.4031 27 25 21.1792 25 14C25 6.82075 19.4031 1 12.5 1C5.59687 1 0 6.82075 0 14C0 21.1792 5.59687 27 12.5 27Z'
              fill='currentColor'
            ></path>
          </svg>
        </SocialLink>
        <SocialLink href='https://www.linkedin.com/in/fabian-wolff-32931613a/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-6 h-6'
            fill='currentColor'
          >
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        </SocialLink>
        <SocialLink href='https://twitter.com/ffabiwo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-6 h-6'
            fill='currentColor'
          >
            <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
          </svg>
        </SocialLink>

        <SocialLink href='mailto:fabiandwolff@gmail.com'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-6 h-6'
            viewBox='0 0 24 24'
          >
            <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
            <path d='M22 6L12 13 2 6' />
          </svg>
        </SocialLink>
      </div>
    </footer>
  )
}
