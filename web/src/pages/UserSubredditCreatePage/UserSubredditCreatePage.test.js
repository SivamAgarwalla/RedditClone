import { render } from '@redwoodjs/testing'

import UserSubredditCreatePage from './UserSubredditCreatePage'

describe('UserSubredditCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserSubredditCreatePage />)
    }).not.toThrow()
  })
})
