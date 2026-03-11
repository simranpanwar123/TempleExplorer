import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/download.jfif'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './home.jsx'
import About from './about.jsx'
import Gallery from './gallery.jsx'
import Details from './details.jsx'
import Contact from './contact.jsx'


const navLinkStyles =({ isActive }) => ({
  color : isActive ? '#007bff' : '#f8f5f5',
   textDecoration: isActive ? 'none' : 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
})


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    
    <BrowserRouter>
    <nav className='navbar'>
     
      <h1 className='logo'>Nature</h1>
       {/* Hamburger Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
      <NavLink to="/" style={navLinkStyles}>Home</NavLink> {" "}
      <NavLink to="/about" style={navLinkStyles}>About</NavLink> {" "}
       <NavLink to="/gallery" style={navLinkStyles}>Gallery</NavLink> {" "}
      <NavLink to="/details" style={navLinkStyles}>Details</NavLink> {" "}
      <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink> {" "} 
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
