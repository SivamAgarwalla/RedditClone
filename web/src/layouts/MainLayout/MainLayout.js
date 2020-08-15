import 'antd/dist/antd.css'
import '../../index.css'
import { Layout, Menu } from 'antd'
import { Link, routes } from '@redwoodjs/router'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

const MainLayout = ({ children }) => {
  // We have to make the header, sidebar, and footar using ANT
  return (
    <div>
      <Layout>
        <Header style={{ background: '#ff4602' }} className="header">
          <h1 style={{ color: 'white' }} className="title">
            Reddit Clone
          </h1>
        </Header>
        <Content style={{ padding: '0 10px' }}>
          <Layout
            className="site-layout-background layout-overlay"
            style={{ padding: '24px 0' }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultOpenKeys={['sub2']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="1">
                  <Link to={routes.home()}> Home </Link>
                </Menu.Item>
                <SubMenu key="sub2" title="Subreddit">
                  <Menu.Item key="1">
                    <Link to={routes.mainSubreddit()}> r/science </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to={routes.mainSubreddit()}> r/news </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to={routes.mainSubreddit()}> r/politics </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to={routes.mainSubreddit()}> r/AskReddit </Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Most Popular"></SubMenu>
              </Menu>
            </Sider>
            <div style={{ padding: '0px 10px' }}>
              <Content>{children}</Content>
            </div>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Reddit Clone Mintbean Hackathon
        </Footer>
      </Layout>
    </div>
  )
}

export default MainLayout
