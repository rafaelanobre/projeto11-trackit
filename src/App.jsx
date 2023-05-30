import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Header from './pages/components/header'

function App() {

  return (
    <>
      {/* <Login /> */}
      <Header />
      <Registration />
    </>
  )
}

export default App
