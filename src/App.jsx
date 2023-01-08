import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
