import React, { useState } from 'react'
import ImageViews from './ImageViews'
import { DownCircleFilled } from '@ant-design/icons'

function ArticleItem({ article }) {
  const [isDetail, showDetail] = useState(false)
  return (
    <div className='article-item'>
      <p style={{ textAlign: 'left' }}>
        {/* <Link to={`/article/${article.id}`}>{article.title}</Link> */}
        <div style={{ display: 'flex', position: 'relative' }}>
          <DownCircleFilled
            style={{ color: '#DCA47C', position: 'absolute', right: '20px', cursor: 'pointer' }}
            onClick={() => showDetail(!isDetail)}
          />
          <div className='article-images'>
            <ImageViews images={article?.media?.[0]?.['media-metadata']} />
          </div>
          <div>
            <h4 style={{ margin: '10px auto' }}>{article.title}</h4>
            {isDetail && <div>{article?.abstract}</div>}
          </div>
        </div>
      </p>
      {isDetail && (
        <div style={{ fontSize: 'smaller' }}>
          <span style={{ fontWeight: 'bold' }}>Category :</span> {article?.section}{' '}
          <span style={{ fontWeight: 'bold' }}>Sub-Section :</span>{' '}
          {article?.subsection === '' ? 'Not Available' : article?.subsection}
          <span style={{ fontWeight: 'bold' }}>
            {' '}
            <a href={article?.url}>Read More</a>
          </span>
        </div>
      )}
    </div>
  )
}

export default ArticleItem
