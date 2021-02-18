const Video = ({ sources, thumbnail }) => {
  return (
    <div>
      <video controls autoPlay muted loop playsInline>
        <source src={sources.webm} type='video/webm' />
        <source src={sources.mp4} type='video/mp4' />
      </video>
    </div>
  )
}

export default Video
