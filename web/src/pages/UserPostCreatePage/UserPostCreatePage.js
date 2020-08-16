import MainLayout from 'src/layouts/MainLayout'
import NewPost from 'src/components/NewPost'

const UserPostCreatePage = () => {
  return (
    <MainLayout>
      <div style={{ width: '100vh' }}>
        <NewPost />
      </div>
    </MainLayout>
  )
}

export default UserPostCreatePage
