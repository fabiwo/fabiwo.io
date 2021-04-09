import React, { useState, useRef } from 'react'
import ErrorMessage from '@/components/Newsletter/ErrorMessage'
import SuccessMessage from '@/components/Newsletter/SuccessMessage'
import CubeLoadingSpinner from '@/components/CubeLoadingSpinner'

const NewsletterForm = () => {
  const [form, setForm] = useState(false)
  const inputEl = useRef(null)
  const nameEl = useRef(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setForm({ state: 'loading' })

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
        metadata: { name: nameEl.current.value },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error, metadata } = await res.json()
    if (error) {
      setForm({
        state: 'error',
        message: error,
      })
      return
    }

    inputEl.current.value = ''
    setForm({
      state: 'success',
      message: `Welcome to the club ${metadata.name}! 🥳`,
    })
    // Close the message after 5 seconds
    setTimeout(() => {
      setForm(false)
    }, 5000)
  }

  // Conditional Rendering for form state
  let formMessage
  if (form.state === 'error') {
    formMessage = <ErrorMessage>{form.message}</ErrorMessage>
  } else if (form.state === 'success') {
    formMessage = <SuccessMessage>{form.message}</SuccessMessage>
  } else if (form.state === 'loading') {
    formMessage = <CubeLoadingSpinner />
  } else {
    formMessage = ''
  }

  return (
    <div className='relative w-full p-6 my-4 border border-gray-300 rounded-md shadow-lg dark:border-outer-space-700 dark:bg-outer-space-600 bg-gray-50'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='383'
        height='383'
        fill='none'
        viewBox='0 0 383 383'
        className='absolute z-0 w-12 h-12 text-blue-500 fill-current -top-5 -left-5 hover-rotate'
      >
        <path
          className='rotate'
          d='M161.5 17.3205C180.064 6.60254 202.936 6.60254 221.5 17.3205L327.344 78.4295C345.908 89.1475 357.344 108.955 357.344 130.391V252.609C357.344 274.045 345.908 293.853 327.344 304.571L221.5 365.679C202.936 376.397 180.064 376.397 161.5 365.679L55.6561 304.571C37.0921 293.853 25.6561 274.045 25.6561 252.609V130.391C25.6561 108.955 37.0921 89.1475 55.6561 78.4295L161.5 17.3205Z'
        />
      </svg>
      <h5 className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>
        Join the newsletter
      </h5>
      <p className='my-1 opacity-90'>
        Be part of my journey and get informed about interesting{' '}
        <strong>new articles</strong>,<strong> topics</strong> and{' '}
        <strong>projects</strong> 🚀
      </p>
      <form className='relative my-4 space-y-2' onSubmit={subscribe}>
        <div>
          <label className='font-semibold' htmlFor='name'>
            Name
            <input
              ref={nameEl}
              aria-label='Name for newsletter'
              placeholder='John Doe'
              type='text'
              id='name'
              name='name'
              required
              className='w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md dark:text-outer-space-300 dark:border-transparent focus:bg-gray-100 dark:bg-outer-space-700 dark:placeholder-outer-space-400 dark:focus:bg-outer-space-800 active:ring-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </label>
        </div>
        <div>
          <label className='font-semibold' htmlFor='email'>
            Email
            <input
              ref={inputEl}
              aria-label='Email for newsletter'
              placeholder='johndoe@mail.com'
              type='email'
              id='email'
              name='email'
              autoComplete='email'
              required
              className='w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md dark:text-outer-space-300 dark:border-transparent focus:bg-gray-100 dark:bg-outer-space-700 dark:placeholder-outer-space-400 dark:focus:bg-outer-space-800 active:ring-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </label>
        </div>
        <button
          className='px-10 py-2 font-medium text-white transition duration-300 ease-in-out bg-blue-500 rounded-md shadow hover:bg-blue-600 active:shadow-lg active:bg-blue-700 focus:outline-none '
          type='submit'
        >
          Subscribe
        </button>
      </form>
      {formMessage}
    </div>
  )
}

export default NewsletterForm
