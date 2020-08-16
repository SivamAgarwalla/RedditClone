import 'antd/dist/antd.css'
//import '../index/index.css'
import { Layout, Menu } from 'antd'
import { Link, routes } from '@redwoodjs/router'
//import SubredditListCell from 'src/components/SubredditListCell'

const { Sider } = Layout
const SideBar = () => {
  console.log('Getting here')
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" style={{ height: '100%' }}>
        <Menu.Item key="main1">
          <Link to={routes.home()}> Home </Link>
        </Menu.Item>
        <Menu.Item key="main2">
          <Link to={routes.mainSubreddit()}> Subreddits </Link>
        </Menu.Item>
        <Menu.Item key="main3">
          <Link to={routes.home()}> Create Post </Link>
        </Menu.Item>
        <Menu.Item key="main4">
          <Link to={routes.home()}> Create Subreddit </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideBar
