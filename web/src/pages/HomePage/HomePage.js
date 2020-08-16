import MainLayout from 'src/layouts/MainLayout'
import CardPostsCell from 'src/components/CardPostsCell'
import { Row } from 'antd'

const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <h1>Posts</h1>
        <Row gutter={[4, 4]}>
          <CardPostsCell></CardPostsCell>
        </Row>
      </div>
    </MainLayout>
  )
}

export default HomePage
