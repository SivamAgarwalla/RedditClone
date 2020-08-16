import MainLayout from 'src/layouts/MainLayout'
import CardPostsCell from 'src/components/CardPostsCell'
import { Row } from 'antd'

const HomePage = () => {
  return (
    <MainLayout>
      <Row gutter={[4, 4]}>
        <CardPostsCell></CardPostsCell>
      </Row>
    </MainLayout>
  )
}

export default HomePage
