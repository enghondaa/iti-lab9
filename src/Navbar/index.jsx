import React from 'react'
import './index.css'
import {Link ,NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {
  let activeClassName = "nav-link active-btn px-2";
  let notActive = 'nav-link rounded';
  const favorites = useSelector((state) => state.favorites);

  return (<>
    <nav className="navbar navbar-expand-lg bg-grey text-white navbar-dark  fs-4 fw-bold text-uppercase fixed-top">
      <div className="container">
        <a className="navbar-brand fs-4" href="#">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink className={({ isActive }) =>
              isActive ? activeClassName : notActive
            } aria-current="page" to=''>Movies</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={({ isActive }) =>
              isActive ? activeClassName : notActive
            } aria-current="page" to='favorites'>Favorites <span className='badge bg-warning'>{favorites.length}</span> </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
