import React from 'react'
import { useParams } from 'react-router-dom'

function ArticleDetail() {
  const { id } = useParams()
  // Implement fetch for article details using the id parameter

  return (
    <div>
      <h1>Article Detail</h1>
      {/* Display article details here */}
    </div>
  )
}

export default ArticleDetail
