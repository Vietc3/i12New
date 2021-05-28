import {DiscussionEmbed} from "disqus-react"

interface Props {
    post: any
}

const DisqusComments = ({ post }:Props) => {
  const disqusShortname = "blogstore-1"
  const disqusConfig = {
    url: process.env.NEXT_PUBLIC_BASE_URL_CLIENT+post.id,
    identifier: post.id.toString(), // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;