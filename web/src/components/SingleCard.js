import 'antd/dist/antd.css'
import { Card, Avatar } from 'antd'
import { UpOutlined, DownOutlined, CommentOutlined } from '@ant-design/icons'

const { Meta } = Card

const SingleCard = ({ post }) => {
  return (
    <div>
      <Card
        style={{ width: 400, padding: '10px 10px 10px 10px' }}
        hoverable
        cover={<img alt="Random Generated Image" src={post.image} />}
        actions={[
          <UpOutlined key="upvote" />,
          <DownOutlined key="downvote" />,
          <CommentOutlined key="comment-section" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={'https://robohash.org/' + post.id} />}
          title={post.title}
          description={post.body}
        />
      </Card>
    </div>
  )
}

export default SingleCard
