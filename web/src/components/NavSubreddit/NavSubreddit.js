import { Menu } from 'antd'
import { Link, routes } from '@redwoodjs/router'

const NavSubreddit = ({ subreddit }) => {
  return (
    <Link to={routes.home()}>r/{subreddit.name}</Link>
  )
}

export default NavSubreddit
