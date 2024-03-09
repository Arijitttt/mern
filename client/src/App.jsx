import { useState } from 'react'
import './App.css'
import Nnavbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nnavbar/>

     {/* routing */}
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </>
  )
}

export default App
