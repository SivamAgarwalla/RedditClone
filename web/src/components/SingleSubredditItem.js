import { Menu } from 'antd'
import { Link, routes } from '@redwoodjs/router'
import 'antd/dist/antd.css'

const CircularJSON = require('circular-json')

const SingleSubredditItem = (props) => {
  console.log(props)
  return (
    <Menu.Item key={props.key}>
      <Link to={routes.mainSubreddit()}>
        {CircularJSON.stringify(props.subredditName)}
      </Link>
    </Menu.Item>
  )
}

export default SingleSubredditItem
