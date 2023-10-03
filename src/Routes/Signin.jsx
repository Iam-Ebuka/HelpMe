import React from 'react'
import help from '../images/helpMe.png'
import './Signin.css'
import google from '../images/Google svg.png'
import facebook from '../images/Facebook2 svg.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div>
        <header className="head">
       <Link to={'../'} style={{textDecoration:"none", color:"inherit"}} >    <div ><img className='signinlogo' src={help} alt='logo'></img></div></Link>
        </header>
        <div className="signContainer">
            <div className='signinTopic'>
                <h1 className='login'>Log in or Sign up</h1>
                <p className='signSub'>Join millions of others in sharing successful moves on HelpMeOut.</p>
            </div>
            <div className='signingoogle'>
                <a href="#" className="links">
                 <img className='signlogos' src={google} alt='google' />
                    <p className='signbut'>Continue with Google</p>
                </a>
                <a href="#" className="links"><
                 img className='signlogos' src={facebook} alt='facebook' />
                    <p className='signbut'>Continue with Facebook</p></a>
            </div>
            <div class="horizontal-rule">
                <hr />
                <div class="text">or</div>
                <hr />
            </div>
            <form>
                <label>Email</label>
                <input placeholder='Enter your email' type='email'/>
                <label>Password</label>
                <input placeholder='Enter your password' type='password'/>
                <button className='signisub'>Sign Up</button>
            </form>
        </div>
         
    </div>
  )
}
