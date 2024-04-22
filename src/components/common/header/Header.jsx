import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <header>
        <div className='head'>
          <div className='container flexSB paddingTB'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
            </div>
          </div>
        </div>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Culture</Link>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
