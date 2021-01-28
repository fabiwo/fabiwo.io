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
    <div className='relative w-full p-6 my-4 border border-gray-300 rounded-md shadow-lg bg-gray-50'>
      <h5 className='text-lg font-bold text-gray-900'>Join the newsletter</h5>
      <p className='my-1 text-gray-800'>
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
          className='block w-full px-4 py-2 mt-1 text-gray-900 rounded-md bg-blue-50 focus:bg-blue-100 focus:ring-gray-500 focus:border-gray-500 '
        />
        <button className='absolute top-0 right-0 btn--primary' type='submit'>
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
