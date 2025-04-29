import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Mammals from './pages/Mammals/index.jsx'
import Reptiles from './pages/Reptiles/index.jsx'
import Birds from './pages/Birds/index.jsx'
import Layout from './pages/layout/index.jsx'
import Home from './pages/Home/index.jsx'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='/mammals' element={<Mammals title='Mammals Page' />}/>
      <Route path='/reptiles' element={<Reptiles title='Reptiles page'/>} />
      <Route path='/birds' element={<Birds title='Birdspage'/>}/>
      </Route>
    </Routes>


    </>
  )
}

export default App
