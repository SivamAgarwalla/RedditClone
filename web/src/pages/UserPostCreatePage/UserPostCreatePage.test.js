import { render } from '@redwoodjs/testing'

import UserPostCreatePage from './UserPostCreatePage'

describe('UserPostCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserPostCreatePage />)
    }).not.toThrow()
  })
})
