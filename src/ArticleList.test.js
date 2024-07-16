import React from 'react'
import { render, screen } from '@testing-library/react'
import ArticleList from './ArticleList'

test('renders article list', () => {
  const articles = [{ id: 1, title: 'Test Article' }]
  render(<ArticleList articles={articles} />)
  const articleElement = screen.getByText(/Test Article/i)
  expect(articleElement).toBeInTheDocument()
})
