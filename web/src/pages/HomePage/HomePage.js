import MainLayout from 'src/layouts/MainLayout'
import CardPostsCell from 'src/components/CardPostsCell'
import { Row } from 'antd'

const HomePage = () => {
  return (
    <MainLayout>
      <Row gutter={8}>
        <CardPostsCell></CardPostsCell>
      </Row>
    </MainLayout>
  )
}

export default HomePage
