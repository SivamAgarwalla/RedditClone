import 'antd/dist/antd.css'
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
  console.log('Reaching here')
  return subreddits.map((subreddit) => (
    <SingleSubredditItem
      key={subreddit.id}
      subredditName={subreddit.name}
    ></SingleSubredditItem>
  ))
}

// export const Success = ({ subreddits }) => {
//   return subreddits.map((subreddit) => (
//     <div key={subreddit.id}>
//       <Menu.Item>
//         <Link to={routes.mainSubreddit()}> {subreddit.name} </Link>
//       </Menu.Item>
//     </div>
//   )}
