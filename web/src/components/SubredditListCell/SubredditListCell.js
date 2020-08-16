import 'antd/dist/antd.css'
import { Menu } from 'antd'

import SingleSubredditItem from 'src/components/SingleSubredditItem'

export const QUERY = gql`
  query SubredditListQuery {
    subreddits {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ subreddits }) => {
  return subreddits.map((subreddit) => (
    <Menu.Item key={subreddit.id}>
      <SingleSubredditItem subreddit={subreddit}></SingleSubredditItem>
    </Menu.Item>
  ))
}
