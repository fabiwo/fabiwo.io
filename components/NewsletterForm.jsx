import React, { useState, useRef } from 'react'

const NewsletterForm = ({ API_KEY }) => {
  const [form, setForm] = useState(false)
  const inputEl = useRef(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setForm({ state: 'loading' })

    const email = inputEl.current.value

    if (!email) {
      setForm({
        state: 'error',
        message: 'An email is required',
      })
      return
    }

    try {
      const response = await fetch(
        `https://api.buttondown.email/v1/subscribers`,
        {
          body: JSON.stringify({ email }),
          headers: {
            Authorization: `Token ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      )

      if (response.status >= 400) {
        setForm({
          state: 'error',
          message: `Another error`,
        })
        return
      }

      setForm({
        state: 'success',
        message: `Hooray! You're now on the list.`,
      })
      return
    } catch (error) {
      setForm({
        state: 'error',
        message: 'Error from buttondown',
      })
      return
    }
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
          className='block w-full px-4 py-2 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
        />
        <button
          className='absolute flex items-center justify-center h-8 px-5 font-bold text-gray-800 bg-blue-300 rounded right-1 top-1 dark:bg-gray-700 dark:text-gray-100 w-28'
          type='submit'
        >
          {form.state === 'loading' ? '⏳' : 'Subscribe'}
        </button>
      </form>
      {form.message}
    </div>
  )
}

export default NewsletterForm
