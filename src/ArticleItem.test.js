import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ArticleItem from './components/ArticleItem'

test('renders article item with link', () => {
  const article = { id: 1, title: 'Test Article' }
  render(
    <Router>
      <ArticleItem article={article} />
    </Router>,
  )
  const linkElement = screen.getByText(/Test Article/i)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement.closest('a')).toHaveAttribute('href', '/article/1')
})
