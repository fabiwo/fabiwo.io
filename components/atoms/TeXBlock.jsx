import TeX from '@matejmazur/react-katex'

export const TeXBlock = ({ expression }) => {
  return <TeX block>{expression}</TeX>
}
