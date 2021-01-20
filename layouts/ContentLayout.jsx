import React from 'react'

const ContentLayout = ({ children }) => {
  return (
    <div className='flex flex-col items-start justify-center max-w-2xl mx-auto'>
      {children}
    </div>
  )
}

export default ContentLayout
