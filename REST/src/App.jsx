import { useState } from 'react'
import Home from './component/home'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element ={<Home/>}/>
    </Routes>
  )
}

export default App;
