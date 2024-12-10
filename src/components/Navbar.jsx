import { NavLink } from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function Navbar(){
  const[toggle,setToggle]=useState(false)
  function OpenTaggle(){
    setToggle(!toggle)
  }
    return(
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary col-md-12">
  <div className="container-fluid">
    <navlink className="navbar-brand" href="#">JOBSADDA</navlink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={OpenTaggle}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${!!toggle && 'show'}`} id="navbarSupportedContent">

                                                      {/* Nav buttons */}
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      <li className="nav-item rounded-1 p-1 me-3  ps-2 pe-2" href="#"  ><NavLink className="nav-link text-dark" to='/Home'>Home</NavLink></li>
      <li className="nav-item rounded-1 p-1 me-3  ps-2 pe-2" href="#"  ><NavLink className="nav-link text-dark" to='/About'>About</NavLink></li>
      <li className="nav-item rounded-1 p-1 me-3  ps-2 pe-2" href="#"  ><NavLink className="nav-link text-dark" to='/Jobs'>Jobs</NavLink></li>
      <li className="nav-item rounded-1 p-1 me-3  ps-2 pe-2" href="#"  ><NavLink className="nav-link text-dark" to='/Courses'>Courses</NavLink></li>
      </ul>

                                                      {/* Form Buttons */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item bg-primary rounded rounded-1 p-1 me-3 text-white ps-2 pe-2" href="#"  ><NavLink className="nav-link text-white" to='/Login'>Login</NavLink> </li>
        <li className="nav-item bg-primary rounded rounded-1 p-1 me-3 text-white ps-2 pe-2" href="#"  ><NavLink className="nav-link text-white" to='/client'>Client Sign-up</NavLink></li>
        <li className="nav-item bg-primary rounded rounded-1 p-1 me-3 text-white ps-2 pe-2" href="#"  ><NavLink className="nav-link text-white" to='/Customer'>Customer Sign-up</NavLink></li>
      </ul>


    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar