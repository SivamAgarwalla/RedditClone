import MainLayout from 'src/layouts/MainLayout'
import NewSubreddit from 'src/components/NewSubreddit'

const UserSubredditCreatePage = () => {
  return (
    <MainLayout>
      <div style={{ width: '100vh' }}>
        <NewSubreddit />
      </div>
    </MainLayout>
  )
}

export default UserSubredditCreatePage
