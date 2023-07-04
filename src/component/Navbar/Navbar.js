import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const handleClick= () => {<Link to=""></Link>}
  return (
    <div className='Navbar-box'>
        <div className="box-1" >
            <div className="categories">
                {/* <div className="bookmarked category"> */}
                    <Link to="/bookmarked" className="category" style={{textDecoration:'none'}}>Bookmarked</Link>
                {/* </div> */}
                {/* <div className="business category">
                    Business
                </div>
                <div className="world category">
                    World
                </div>
                <div className="sports category">
                    Sports
                </div> */}
                <div className="logo">
                    <Link to="" className='link'>MyShortNews</Link>
                </div>
            </div>
            
        </div>
        

    </div>
  )
}

export default Navbar
