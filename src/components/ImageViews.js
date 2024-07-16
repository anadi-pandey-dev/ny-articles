import React from 'react'

function ImageViews({ images }) {
  return (
    <div>
      <img height={70} width={100} src={images?.[1]?.url} />
    </div>
  )
}

export default ImageViews
