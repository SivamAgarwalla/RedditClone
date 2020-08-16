import { render } from '@redwoodjs/testing'

import ViewSubredditPage from './ViewSubredditPage'

describe('ViewSubredditPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewSubredditPage />)
    }).not.toThrow()
  })
})
