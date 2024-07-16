import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import ArticleListContainer from './modules/ArticleListContainer'

jest.mock('axios')

test('fetches and displays articles', async () => {
  const articles = [{ id: 1, title: 'Test Article' }]
  axios.get.mockResolvedValue({ data: { results: articles } })

  render(<ArticleListContainer />)

  expect(screen.getByText(/Loading/i)).toBeInTheDocument()

  await waitFor(() => {
    const articleElement = screen.getByText(/Test Article/i)
    expect(articleElement).toBeInTheDocument()
  })
})
