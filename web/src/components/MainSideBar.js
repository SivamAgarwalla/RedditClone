import 'antd/dist/antd.css'
//import '../index/index.css'
import { Layout, Menu } from 'antd'
import { Link, routes } from '@redwoodjs/router'
import SubredditListCell from 'src/components/SubredditListCell'

const { SubMenu } = Menu
const { Sider } = Layout
const SideBar = () => {
  console.log('Getting here')
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" defaultOpenKeys={['sub2']} style={{ height: '100%' }}>
        <Menu.Item key="main1">
          <Link to={routes.home()}> Home </Link>
        </Menu.Item>
        <SubMenu key="main2" title="Subreddit">
          <SubredditListCell></SubredditListCell>
        </SubMenu>
        <Menu.Item key="main3">
          <Link to={routes.home()}> Most Popular </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideBar
