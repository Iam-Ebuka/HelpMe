import React from 'react'
import './Footer.css'
import fram from '../images/Frame 246.png'

function Footer() {
  return (
    <div>
        <div className='foot'>
            <div>
                <img className='mnpa' src={fram} alt='taxt' />
            </div>
            <div>
                <p style={{fontWeight: '600',fontFamily: "'Sora', sans-serif" }}>Menu</p>
                <p>Home</p>
                <p>Converter</p>
                <p>How it works</p>
            </div>
            <div>
                <p style={{fontWeight: '600',fontFamily: "'Sora', sans-serif"}}>About Us</p>
                <p>About</p>
                <p>Contact Us</p>
                <p>Private Policy</p>
            </div>
            <div>
                <p style={{fontWeight: '600',fontFamily: "'Sora', sans-serif"}}>Screen Record</p>
                <p>Browser Window</p>
                <p>Desktop</p>
                <p>Application</p>
            </div>
        </div>
    </div>
  )
}

export default Footer