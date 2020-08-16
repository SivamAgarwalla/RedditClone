import MainLayout from 'src/layouts/MainLayout'
import AllSubredditsListCell from 'src/components/AllSubredditsListCell'

const MainSubredditPage = () => {
  return (
    <MainLayout>
      <div>
        <h1>Subreddits</h1>
        <AllSubredditsListCell></AllSubredditsListCell>
      </div>
    </MainLayout>
  )
}

export default MainSubredditPage
