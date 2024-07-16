import React from 'react'
import { Link } from 'react-router-dom'
import ArticleItem from './ArticleItem'

function ArticleList({ articles }) {
  return (
    <div style={{ overflow: 'hidden', overflowY: 'scroll', height: '90vh' }}>
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
