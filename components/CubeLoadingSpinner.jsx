const CubeLoadingSpinner = () => {
  const cubes = [...Array(9).keys()]
  return (
    <div className='sk-cube-grid'>
      {cubes.map((cube) => (
        <Cube key={`cube-${cube}`} nr={cube} />
      ))}
    </div>
  )
}

const Cube = ({ nr }) => <div className={`bg-blue-500 sk-cube sk-cube${nr}`} />

export default CubeLoadingSpinner
