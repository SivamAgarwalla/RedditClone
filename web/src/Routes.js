// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/main-subreddit"
        page={MainSubredditPage}
        name="mainSubreddit"
      />
      <Route
        path="/subreddits/new"
        page={NewSubredditPage}
        name="newSubreddit"
      />
      <Route
        path="/subreddits/{id:Int}/edit"
        page={EditSubredditPage}
        name="editSubreddit"
      />
      <Route
        path="/subreddits/{id:Int}"
        page={SubredditPage}
        name="subreddit"
      />
      <Route path="/subreddits" page={SubredditsPage} name="subreddits" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
