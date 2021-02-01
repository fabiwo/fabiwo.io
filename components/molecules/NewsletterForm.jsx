import React, { useState, useRef } from 'react'
import ErrorMessage from '../atoms/ErrorMessage'
import SuccessMessage from '../atoms/SuccessMessage'
import CubeSpinner from '../atoms/CubeSpinner'

const NewsletterForm = () => {
  const [form, setForm] = useState(false)
  const inputEl = useRef(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setForm({ state: 'loading' })

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
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
      message: `Welcome to the club! 🥳`,
    })
    // Close the message after 5 seconds
    setTimeout(() => {
      setForm(false)
    }, 5000)
  }

  return (
    <div className='relative w-full p-6 my-4 border border-gray-300 rounded-md shadow-lg dark:bg-outer-space-200 bg-gray-50'>
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
      <h5 className='text-lg font-bold text-black'>Join the newsletter</h5>
      <p className='my-1 text-black'>
        Be part of my journey and get informed about interesting{' '}
        <strong>new articles</strong>,<strong> topics</strong> and{' '}
        <strong>projects</strong> 🚀
      </p>
      <form className='relative my-4' onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label='Email for newsletter'
          placeholder='pepethefrog@gmail.com'
          type='email'
          autoComplete='email'
          required
          className='block w-full px-4 py-2 mt-1 text-gray-900 rounded-md bg-blue-50 focus:bg-blue-100 focus:ring-gray-500 focus:border-gray-500 dark:bg-outer-space-50'
        />
        <button
          className='absolute top-0 right-0 px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 shadow rounded-r-md hover:bg-blue-600 active:shadow-lg active:bg-blue-700 focus:outline-none '
          type='submit'
        >
          Subscribe
        </button>
      </form>
      {form.state === 'error' ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === 'success' ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : form.state === 'loading' ? (
        <CubeSpinner />
      ) : (
        ''
      )}
    </div>
  )
}

export default NewsletterForm
