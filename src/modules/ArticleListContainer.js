import React, { useEffect, useState } from 'react'
import ArticleList from '../components/ArticleList'
import axios from 'axios'

const ArticleListContainer = ({ name }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=LlduL0aeoIPjnviwXYNfPEjvrDPOGUNz')
      .then(response => {
        setArticles(response.data.results)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading articles: {error.message}</p>

  return <ArticleList articles={articles} />
}

export default ArticleListContainer
