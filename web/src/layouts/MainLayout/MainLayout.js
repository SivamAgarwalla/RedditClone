//import 'antd/dist/antd.css'
import '../../index.css'
import { Layout } from 'antd'

import MainSideBar from 'src/components/MainSideBar'

const { Header, Content, Footer } = Layout

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
        <Content style={{ padding: '0px 0px' }}>
          <Layout
            className="site-layout-background layout-overlay"
            style={{ padding: '24px 0' }}
          >
            <MainSideBar></MainSideBar>
            <div className="main-div-style" style={{ padding: '0px 10px' }}>
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
