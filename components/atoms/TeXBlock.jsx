import TeX from '@matejmazur/react-katex'

export const TeXBlock = ({ expression, nr }) => {
  return (
    <div className='relative flex items-center justify-center w-full'>
      <p className='absolute right-0 text-xl font-bold '>{`[ ${nr} ]`}</p>
      <TeX block>{expression}</TeX>
    </div>
  )
}
