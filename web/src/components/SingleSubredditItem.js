//import { Menu } from 'antd'
import { Link, routes } from '@redwoodjs/router'
import 'antd/dist/antd.css'

//const CircularJSON = require('circular-json')

const SingleSubredditItem = ({ subreddit }) => {
  return <Link to={routes.mainSubreddit()}>{subreddit.name}</Link>
}

export default SingleSubredditItem
