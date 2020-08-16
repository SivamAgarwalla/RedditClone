import '../../index.css'
import { Layout } from 'antd'

import MainSideBar from 'src/components/MainSideBar'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => {
  return (
    <div>
      <Layout>
        <Header style={{ background: '#ff4602' }}>
          <h1 style={{ color: 'white' }} className="title">
            Reddit Clone
          </h1>
        </Header>
        <Content>
          <Layout className="site-layout-background layout-overlay">
            <MainSideBar></MainSideBar>
            <div className="main-div-style">
              <Content>{children}</Content>
            </div>
          </Layout>
        </Content>
        <Footer style={{ background: '#ff4602' }}>
          <h1 style={{ color: 'white' }} className="title">
            Created At Mintbeans 50th Hackathon
          </h1>
        </Footer>
      </Layout>
    </div>
  )
}

export default MainLayout
