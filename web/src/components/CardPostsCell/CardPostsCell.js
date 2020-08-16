import { Col } from 'antd'

import SingleCard from '../SingleCard'

export const QUERY = gql`
  query CardPostsQuery {
    posts {
      id
      title
      body
      image
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <Col key={post.id} md={12} lg={8} xl={6}>
      <SingleCard post={post}></SingleCard>
    </Col>
  ))
}
