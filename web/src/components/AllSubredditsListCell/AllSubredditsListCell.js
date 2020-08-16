import { List, Avatar, Divider } from 'antd'

export const QUERY = gql`
  query AllSubredditsListQuery {
    subreddits {
      id
      name
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ subreddits }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={subreddits}
      renderItem={(subreddit) => (
        <div>
          <List.Item style={{ width: '120vh' }}>
            <List.Item.Meta
              avatar={<Avatar src={'https://robohash.org/' + subreddit.name} />}
              title={subreddit.name}
              description={subreddit.description}
            />
          </List.Item>
          <Divider />
        </div>
      )}
    ></List>
  )
}
