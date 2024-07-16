import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import ArticleDetail from './modules/ArticleDetail'
import ArticleListContainer from './modules/ArticleListContainer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<ArticleListContainer />} />
            <Route path='/article/:id' element={<ArticleDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
