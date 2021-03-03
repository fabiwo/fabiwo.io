import TeX from '@matejmazur/react-katex'

const TeXBlock = ({ expression }) => (
  <div className='relative flex items-center justify-center w-full'>
    <TeX block>{expression}</TeX>
  </div>
)

export default TeXBlock
