import 'antd/dist/antd.css'
import { Card, Avatar } from 'antd'
import { UpOutlined, DownOutlined, CommentOutlined } from '@ant-design/icons'

const { Meta } = Card

const SingleCard = ({ post }) => {
  return (
    <div>
      <Card
        style={{ width: 300, padding: '5px 5px' }}
        cover={
          <img
            alt="black background"
            // Replace with image relevant to the post
            src="https://i.ibb.co/crPQt2D/Screen-Shot-2020-08-15-at-12-03-56-AM.png"
          />
        }
        actions={[
          <UpOutlined key="upvote" />,
          <DownOutlined key="downvote" />,
          <CommentOutlined key="comment-section" />,
        ]}
      >
        <Meta
          avatar={
            // Replace with USER avatar png link
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={post.title}
          description={post.body}
        />
      </Card>
    </div>
  )
}

export default SingleCard
