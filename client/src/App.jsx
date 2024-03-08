import { useState } from 'react'
import './App.css'
import Nnavbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Hi, from react 
     <Nnavbar/>
     <Home/>
     <Contact/>
     <About/>
     <Login/>
     <SignUp/>
     
    </>
  )
}

export default App
