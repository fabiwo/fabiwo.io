import React, { useRef, useEffect } from 'react'
import { Runtime, Inspector } from '@observablehq/runtime'
import ThemeProvider from '@/layouts/ThemeProvider'

export function ObservableLayout({ children }) {
  return (
    <ThemeProvider>
      <article className='w-full max-w-2xl mx-auto mb-10'>
        <div className='w-full mt-5 prose prose-indigo max-w-none'>
          {children}
        </div>
      </article>
    </ThemeProvider>
  )
}

function ObservableEmbed({ notebook }) {
  const ref = useRef()

  useEffect(() => {
    const runtime = new Runtime()
    runtime.module(notebook, Inspector.into(ref.current))
    return () => runtime.dispose()
  }, [])

  return <div ref={ref} />
}

export default ObservableEmbed
