import React from 'react'
import what from '../images/Vector.png'
import face from '../images/Facebook svg.png'
import tell from '../images/Group.png'
import './Button.css'

function Button() {
  return (
    <div className='butshare'>
        <button className='share'>
            <img className='facebook' src={face} alt="facebook" />
            <p className='yeh'> Facebook</p>
        </button >
        <button className='share'>
            <img className='facebook' src={what} alt="whatspp" />
            <p className='yeh'>WhatsApp</p>
        </button >
        <button  className='share'>
            <img className='facebook' src={tell} alt="telegram" />
            <p className='yeh'>Telegram</p>
        </button>
    </div>
  )
}

export default Button