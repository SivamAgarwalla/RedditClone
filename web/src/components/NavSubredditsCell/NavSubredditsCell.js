import 'antd/dist/antd.css'
import 'src/index.css'
import { Menu } from "antd"
const { SubMenu } = Menu
import NavSubreddit from "src/components/NavSubreddit"

export const QUERY = gql`
  query NavSubredditsQuery {
    subreddits {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ subreddits }) => {
  // return <NavSubreddit subreddit={subreddits[0]} />
  return (
    <Menu><SubMenu key="dynamic" title="DynamicSubreddit">
      {subreddits.map((subreddit) => {
        return (
          <Menu.Item>
            <NavSubreddit subreddit={subreddit} />
          </Menu.Item>
        )
      })}
    </SubMenu></Menu>
  )
}
