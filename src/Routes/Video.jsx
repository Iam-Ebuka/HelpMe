import React from 'react'
import './Video.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../images/Layer2.png'
import arrow from '../images/arrow-down.png'
import person from '../images/profile-circle.png'
import biro from '../images/edit.png'
import copy from '../images/copy Link.png'
import fram from '../images/Frame 45.png'
import fra from '../images/Fra.png'

function Video() {
    const {_id} = useParams()

    const [videoData, setVideoData] = useState('');
    const [error, setError] = useState(null)

    const videoUrl = `https://video-upload-api.onrender.com/api/videos/${_id}`

    useEffect(() => {
        fetch(videoUrl)
        .then(res => {
            if(!res.ok) {
                throw new Error ("Error! Check your network connection")
            }
            return res.json()})
            .then(data => {
                setVideoData(data.data);
                setError(null);
            }).catch(err=> {
                setError(err.message)
            })
    }, [videoUrl]);
     if (error) {
        return (
            <div>
                <center><div style={{color:'red', fontSize:'30px'}}>{error}</div></center>
            </div>
        )
     }
     if (!videoData) {
        return <div style={{fontSize:"50px", color:"#141414"}}><center>Loading...</center></div>
     }
     console.log(videoData.url)

    
  return (
    <div >
        <header className='headerV'>
          <div className='headcontain'>
            <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='log' >
                <img src={logo} alt="logo" style={{height: "40px", width: "40px"}} />
                <h3 style={{fontWeight:'700', fontSize:'16px', color:'#100A42'}}>HelpMeOut</h3>
                </div>
            </Link>
            <div className='userIden' >
              <img src={person} alt='person' style={{width:"40px", height: '40px'}} />
              <p className="persone">John Mark</p>
              <img src={arrow} alt='arrow' style={{width: '24px', height:'24px'}} />
            </div>
          </div>
        </header>
        <div style={{ width:'100%', display:'flex', justifyContent:'center', marginTop:"46px"}}>
            <div style={{width:'calc(100% - 200px)'}}>
            <p className="pagesummary" style={{fontWeight:'400', color:"rgba(20,20,20,0.7)"}}>Home / Recent Video / <span style={{fontWeight:'500', color:"#413c6d"}}>How To Create A Facebook Ad Listing</span></p>
            </div>
        </div>
        <div style={{width:'100%', display: 'flex', justifyContent:'center', marginTop:'30px'}}>
            <div style={{width:'calc(100% - 200px)'}}>
                <div style={{width:'508px', display:'flex', justifyContent: 'space-between', alignItems:'center'}}>
                    <p className='atitle' >How To Create A Facebook Ad Listing</p>
                    <img src={biro} alt="biro" style={{color:'#141414',width:'24px', height:'24px'}}/>
                </div>
            </div>
        </div>
        <div style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='grid' style={{width: "100% ", display:'grid', gridTemplateRows:'46px 1fr 40px', justifyContent:'start',gridTemplateColumns: '100px 1fr'}}>
            <video
  style={{
    width: "calc(100% - 110px)",
    borderRadius: '10px',
    gridRow: '2/3',
    gridColumn: '2/3',
    alignSelf: 'start',
    maxWidth: '1240px',
    padding: '16px',
    border: '1px solid rgba(182, 179, 198, 0.6',
  }}
  controls
  
  autoPlay
>
  <source src={videoData.url} type='video/mp4'></source>
  <source src={videoData.webmUrl} type='video/webm'></source>
  <source src={videoData.aviUrl} type='video/avi'></source>
</video>

            </div>
        </div>
        <div className='inputsss'>
            <div className="inputContain" >
                <div className='send'>
                   <img src={fram} alt="pid" />
                </div>
                <div className='send'>
                    <img src={fra} alt='fra' />
                </div>
            </div>
        
        </div>
    </div>
  
  )
}

export default Video