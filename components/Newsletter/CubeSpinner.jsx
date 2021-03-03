const CubeSpinner = () => {
  const cubes = [...Array(9).keys()]
  return (
    <div className='sk-cube-grid'>
      {cubes.map((cube, i) => (
        <Cube key={i} nr={cube} />
      ))}
    </div>
  )
}

const Cube = ({ nr }) => {
  return <div className={`bg-blue-500 sk-cube sk-cube${nr}`}></div>
}

export default CubeSpinner
