import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './app/home/home'
import Dashboard from './app/dashboard/dashboard'

function App() {


  return (
    <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
