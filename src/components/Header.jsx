import React from 'react'
import './Header.css'
import hoome from '../images/helpMe.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className='Navbar'>
            <div className='NavbarCushon'>
               <Link to={"../ho"} style={{textDecoration:"none", color:"inherit"}}>
                <img src={hoome} alt='logo' className='hoome'/>
                 </Link>
                <div className='middle'>
                    <Link to={"../ready"} style={{textDecoration:"none", color:"inherit"}}>
                    <p>Features</p>
                    </Link>
                  <Link to={"../"} style={{textDecoration:"none", color:"inherit"}}>
                    <p>How It Works</p>
                    </Link>
                </div>
                <Link to={'../signin'} style={{textDecoration:'none',color:'inherit'}}>
                <div className='end'>
                    <p>Get Started</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
