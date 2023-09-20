import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      Navbar
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        {/* <li className="nav-item">
           <NavLink className="nav-link" to="#/about">
             About  
           </NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Contact
          </NavLink>
        </li> */}
        
        {/* <li className="nav-item dropdown">
          <NavLink
            className="nav-NavLink dropdown-toggle"
            to="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown Hi 
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/">
                Action
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/">
                Another action
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink className="dropdown-item" to="/">
                Something else here
              </NavLink>
            </li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-NavLink disabled" aria-disabled="true" to="/">
            Disabled
          </NavLink>
        </li> */}
      </ul>
      <div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
    onClick={props.toggleMode}
    
  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
    Switch Modes
  </label>
</div>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </div>
  </div>
</nav>

    
    
    <Outlet/>   
    
    

    </>
  )
}

export default Navbar
