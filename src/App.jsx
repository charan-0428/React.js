import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import {Routes,Route} from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Login from "./pages/Login.jsx"
import SignUpForm from "./pages/client.jsx"
import SignUpForm2 from "./pages/Customer.jsx"
import Courses from "./pages/Courses.jsx"
import Jobs from "./pages/Jobs.jsx"
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"

import './App.css'
function App() {
  

  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/client" element={<SignUpForm/>}/>
      <Route path="/Customer" element={<SignUpForm2/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/Jobs" element={<Jobs/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>

    </>
  )
}

export default App
