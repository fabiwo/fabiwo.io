import { DiscussionEmbed } from 'disqus-react'

const DisqusComments = ({ identifier, title }) => {
  const disqusShortname = 'fabiwo'
  const disqusConfig = {
    url:
      !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/${identifier}`
        : `https://fabiwo.io/${identifier}`,
    identifier, // Single post id
    title, // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
        width={420}
        height={320}
      />
    </div>
  )
}

export default DisqusComments
