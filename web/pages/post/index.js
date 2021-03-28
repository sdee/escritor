import Link from 'next/link'
import client from '../../client'

function Index(props) {
    const { posts = [] } = props
    return (
      <div>
        <h1>Welcome to a blog!</h1>
      </div>
    )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(`
    *[_type == "post"]
  `)
})

export default Index