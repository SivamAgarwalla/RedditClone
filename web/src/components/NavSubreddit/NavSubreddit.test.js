import { render } from '@redwoodjs/testing'

import NavSubreddit from './NavSubreddit'

describe('NavSubreddit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavSubreddit />)
    }).not.toThrow()
  })
})
