import { render } from '@redwoodjs/testing'

import MainSubredditPage from './MainSubredditPage'

describe('MainSubredditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainSubredditPage />)
    }).not.toThrow()
  })
})
