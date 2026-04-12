import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbaar from '../componet/Navbaar'
import Home from './Home'
import Quiz from './Quiz'
import { Toaster } from 'react-hot-toast'

const Index = () => {
  return (
    <BrowserRouter>
    <Toaster/>
    <Navbaar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/question' element={<Quiz/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index