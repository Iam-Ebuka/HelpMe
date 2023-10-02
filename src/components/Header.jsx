import React from 'react'
import './Header.css'
import hoome from '../images/helpMe.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className='Navbar'>
            <div className='NavbarCushon'>
                <img src={hoome} alt='logo' className='hoome'/>
                <div className='middle'>
                    <p>Features</p>
                    <p>How It Works</p>
                </div>
                <Link to={'./ho'} style={{textDecoration:'none'}}>
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