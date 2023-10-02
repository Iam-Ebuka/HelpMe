import React from 'react'
import ge from '../images/grid.136a9256d16888900db0.svg.png'
import gr from '../images/grid.136a9256d16888900db0.svg (1).png'
import man from '../images/man on computer.png'
import mo from '../images/woman-using-smartphone-technology 2 (1).png'
import ic from '../images/Icon placeholder.png'
import ds from '../images/Icon placeholder (2).png'
import dd from '../images/Icon placeholder (1).png'
import fi from '../images/Video Repository.png'
import a from '../images/Icon.png'
import b from '../images/Icon (1).png'
import c from '../images/Icon (2).png'
import two from '../images/twoPeople.png'
import boig from '../images/rec-1.cb7888a47e24214aeb105805426a8300.svg.png'
import './HomePage.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


function HomePage() {
  return (
    <div>
       <Header/>
        <div className='heroSection'>
        <img className='mmm' src={ge} alt='t'/>
         <img className='mmma' src={gr} alt='d'/>
            <div className='topicAndButton'>
                <h1 className='Heaf'>Show Them Don't Just Tell</h1>
                <p className='heafpa'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                 <button className='yyyya'>Install HelpMeOut  -&gt;</button>
            </div>
         
          
            <div className='picturs'>
                <img className='r' src={man} alt='d'/>
                <img className='s' src={two} alt='r'/>
                <img className='esa' src={mo} alt='d'/>
            </div>
        </div>
        <div className='features'>
            <center><h1 className='nid'>Features</h1></center>
            <center><p className='hid'>Key Highlights of Our Extension</p></center>
            <div className='feat'>
                <div className='sample'>
                    <div className='simpleScren'>
                        <div className='image'><img src={ic} alt='circle'></img> </div>
                        <div className='text'>
                            <h1 className='screen'>Simple Screen Recording</h1>
                            <p className='paraf'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </div>
                    </div>
                    <div className='simpleScren'>
                        
                        <div className='image'><img src={dd} alt='dd'/></div>
                        <div className='text'>
                            <h1 className='screen'>Easy-to-Share URL</h1>
                            <p className='paraf'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </div>
                    </div>
                    <div className='simpleScren'>
                        <div className='image'><img src={ds}/></div>
                        <div className='text'>
                            <h1 className='screen'>Revisit Recordings</h1>
                            <p className='paraf'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </div>
                    </div>
                </div>
                <div className='pic'>
                    <img src={fi} alt='blabla'/>
                </div>
            </div>
        </div>
        <div className='hello'>
            <center><h2 className='jj'>How it works</h2></center>
            <div className='hhhh'>
                <div className='e'>
                    <img class="sa" src={a} alt='l'></img>
                    <h4>Record Screen</h4>
                    <p>Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</p>
                    <img className='boing' src={boig} alt='nn' />
                </div>
                <div className='e'>
                    <img className='sa' src={b} alt='ld'></img>
                    <h4>Share Your Recording</h4>
                    <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                    <img className='boing' src={boig} alt='nn' />
                </div>
                <div className='e'>
                    <img className='sa' src={c} alt='dh'></img>
                    <h4>Learn Effortlessly</h4>
                    <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                    <img className='boing' src={boig} alt='nn' />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage
