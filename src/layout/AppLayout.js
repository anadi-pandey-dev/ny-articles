// Packages:
import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

// Functions:
const AppLayout = () => {
  // Return:
  return (
    <div className='app-container' style={{ height: '100vh' }}>
      <main className='app-container-main'>
        <div className='app-container-right'>
          <Header />
          <main className='app-container-outlet' style={{ height: '90vh' }}>
            <Outlet />
          </main>
        </div>
      </main>
    </div>
  )
}

// Exports:
export default AppLayout
