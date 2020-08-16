import 'antd/dist/antd.css'
import 'src/index.css'
import { Layout, Menu } from 'antd'
import { Link, routes } from '@redwoodjs/router'
import NavSubredditsCell from 'src/components/NavSubredditsCell'

import MainSideBar from 'src/components/MainSideBar'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => {
  return (
    <div>
      <Layout>
        <Header style={{ background: '#ff4602' }} className="header">
          <h1 style={{ color: 'white' }} className="title">
            Reddit Clone
          </h1>
        </Header>
        <Content style={{ padding: '10px 10px 10px 10px' }}>
          <Layout
            className="site-layout-background layout-overlay"
            style={{ padding: '5px 5px' }}
          >
            <MainSideBar></MainSideBar>
            <div className="main-div-style">
              <Content>{children}</Content>
            </div>
          </Layout>
        </Content>
        <Footer style={{ padding: '10px 10px 10px 10px' }}>
          Reddit Clone Mintbean Hackathon
        </Footer>
      </Layout>
    </div>
  )
}

export default MainLayout
