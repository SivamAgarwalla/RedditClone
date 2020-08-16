import { Link } from '@redwoodjs/router'

const ViewSubredditPage = () => {
  return (
    <>
      <h1>ViewSubredditPage</h1>
      <p>Find me in "./web/src/pages/ViewSubredditPage/ViewSubredditPage.js"</p>
      <p>
        My default route is named "viewSubreddit", link to me with `
        <Link to="viewSubreddit">routes.viewSubreddit()</Link>`
      </p>
    </>
  )
}

export default ViewSubredditPage
