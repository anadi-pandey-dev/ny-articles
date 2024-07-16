import React, { useState } from 'react'

const Header = ({ name }) => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  return (
    <div
      style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000' }}
      className='header-container'
    >
      <div style={{ fontWeight: 'bolder', letterSpacing: '1.2px', fontSize: 'larger' }}>Trending</div>
    </div>
  )
}

export default Header
