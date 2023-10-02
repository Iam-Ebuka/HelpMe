import React from 'react'
import Header from '../components/Header'
import copy from '../images/edit.png'
import img from '../images/copy Link.png'
import Button from '../components/Button'
import vif from '../images/video.png'
import './Ready.css'
import Footer from '../components/Footer'

function Ready() {
  return (
    <div>
        <Header />
        <div className='readyContent'>
            <div className='firsthalf'>
                <h1 className='readyVideo'>Your video is ready!</h1>
                <div className="nameholder">
                    <h4 className='name'>Name</h4>
                    <div className="check">
                        <p className='nameVideo'>Untitled_Video_20232509</p>
                        <img src={copy} alt='copy' className='copyIcon' />
                    </div>
                    <div className='block'>
                        <p className='inputeee'>enter email of reciever</p>
                        <button className='inputSend'>Send</button>
                    </div>
                    <p className='videoUrl'>Video Url</p>
                    <div className='secondBlock'>
                        <p className='vidls'>https://www.helpmeout/Untitled_Video_20232509</p>
                        <button className='copscopy'><img src={img} />copy</button> 
                    </div>
                    <p className='say'>Share your video</p>
                    <div className='boots'>
                        <Button />
                    </div>
                </div>
                <div className='nnn'>
                    
                </div>
            </div>
            <div className='secondhalf'>
                <img src={vif} className='vid' alt='video'/>
                <div className='transcontain'> 
                    <h4 className='trans'>Transcript</h4>
                    <select id="menu">
                        <option value="English">English</option>
                        <option value="French" selected>French</option>
                        <option value="Yoruba">Yoruba</option>
                        <option value="Hausa">Hausa</option>
                        <option value="Igbo">Igbo</option>
                    </select>
                </div>
                <div className='grippcont'>
                <div className='gripppa'>
                    <p id='d'>0.01</p>
                    <p id='r'>You are the best, believe in your self. thank you very much for coming to this page</p>
                    </div>
                <div className='gripppa'>
                    <p id='q'>0.15</p>
                    <p id='u'>First step Is to open facebook and 
                    read you mobile device to see what on social media</p>
                </div>
                </div>
               
            </div>
        </div>
        <div className='downSec'>
            <div className='center'>
                <p className='downsSE'>
                To ensure the availability and privacy of your 
                video, we recommend saving it to your account.</p>
                <button>Save Video</button>
                <p className='do'>Don’t have an account? <span style={{color:'#120B48'}}>Create account</span></p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Ready