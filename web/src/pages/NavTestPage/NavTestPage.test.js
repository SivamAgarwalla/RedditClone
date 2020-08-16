import { render } from '@redwoodjs/testing'

import NavTestPage from './NavTestPage'

describe('NavTestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavTestPage />)
    }).not.toThrow()
  })
})
