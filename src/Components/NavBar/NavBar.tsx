import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

export const NavBar = ({setOpenModal}: {setOpenModal:Dispatch<SetStateAction<boolean>>}) => {
    return (
<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">    
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="users" className="nav-link active" aria-current="page">Users</Link>
        </li>

        <li className="nav-item">
          <Link to="posts" className="nav-link active" aria-current="page">Posts</Link>
        </li>
      </ul> 
    <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Login</button>
    </div>
</nav>
    )
}
