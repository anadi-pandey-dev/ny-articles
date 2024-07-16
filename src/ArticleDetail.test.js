import React from 'react'
import { render, screen } from '@testing-library/react'
import { useParams } from 'react-router-dom'
import ArticleDetail from './ArticleDetail'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}))

test('renders article detail', () => {
  useParams.mockReturnValue({ id: 1 })
  render(<ArticleDetail />)
  expect(screen.getByText(/Article Detail/i)).toBeInTheDocument()
})
