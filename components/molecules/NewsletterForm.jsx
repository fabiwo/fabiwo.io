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
    <div className='w-full p-6 my-4 border border-blue-300 rounded-lg shadow-lg bg-blue-50'>
      <h5 className='text-lg font-bold text-gray-900'>
        Subscribe to the newsletter 📧
      </h5>
      <p className='my-1 text-gray-800'>
        Be up to date! Get emails from me about new interesting topics and early
        access to <strong>new articles🚀</strong>.
      </p>

      <form className='relative my-4' onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label='Email for newsletter'
          placeholder='pepethefrog@gmail.com'
          type='email'
          autoComplete='email'
          required
          className='block w-full px-4 py-2 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
        />
        <button
          className='absolute flex items-center justify-center h-8 px-5 font-bold text-gray-800 bg-blue-300 rounded right-1 top-1 dark:bg-gray-700 dark:text-gray-100 w-28'
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
