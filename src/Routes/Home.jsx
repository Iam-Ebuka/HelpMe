import React, { useEffect, useState } from 'react'
import logo from "../images/Layer2.png"
import person from '../images/profile-circle.png'
import arrow from '../images/arrow-down.png'
import search from '../images/search-normal.png'
import './Home.css'
import VideoCard from '../components/VideoCard'
import { Link } from 'react-router-dom'


function Home() {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null);

  const URL = "https://video-upload-api.onrender.com/api/videos"

  useEffect(()=>{
    fetch(URL)
    .then(res=> {
      if(!res.ok) {
        throw new Error ("Error! Check your network connection")
    }
      return res.json()})
    .then(data => {
      setVideos(data.data);
      setError(null)})
      .catch(err=> {
        setError(err.message)
    })
  }, [])

  if (error) {
    return (
        <div>
            <center><div style={{color:'red', fontSize:'30px'}}>{error}</div></center>
        </div>
    )
  }

  if (videos.length === 0) {
    return <div style={{fontSize:"50px", color:"#141414"}}><center>Loading...</center></div>
  
  }

  console.log(videos)

  return (
    <div className='body'>
      <center><p style={{color:'red' , fontSize: "10px"}}>Please note: i will soon be done with home page. To see my progress press Logo. </p></center>
      <center><p style={{color: 'red', fontSize:"10px"}}>Press tiles to see vidoes recorded. press menus after pressing logo to see other pages</p></center>
        <header className='header' >
          <div className='headcontain' style={{}}>
          <Link to={'/ho'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='log' style={{width: "137px", display: "flex", justifyContent:"space-between", alignItems:"center", height: "40px"}}>
              <img src={logo} alt="logo" style={{height: "40px", width: "40px"}} />
              <h3 style={{fontWeight:'700', fontSize:'16px', color:'#100A42'}}>HelpMeOut</h3>
            </div>
            </Link>
            <Link to={"/signin"} style={{ textDecoration:'none', color:'inherit'}}>
            <div className='userIden' style={{width: '163px', display:"flex", justifyContent:"space-between", alignItems:'center'}} >
              <img src={person} alt='icon' style={{width:"40px", height: '40px'}} />
              <p style={{fontWeight:"400", fontSize: "16px", color: '#141414'}}>John Mark</p>
              <img src={arrow} alt='arrow' style={{width: '24px', height:'24px'}} />
            </div>
            </Link>
          </div>
        </header>
        <section style={{height:'69px', width: 'calc(100% - 262px)', margin: "56px auto 0 auto", display: 'flex', justifyContent:"space-between", alignItems:"center"}}>
          <div className='hello' style={{width:'278px', display:"flex", flexDirection: 'column',justifyContent: 'space-between'}}>
            <h1 style={{fontWeight: '700', fontSize:"32px", fontFamily:"'Sora', arial", color:"#141414"}}>Hello, John Mark</h1>
            <p style={{fontWeight:'400', fontSize: '18px', fontFamily:'"work sans" arial', color:"#141414"}}>Here are your recorded videos</p>
          </div>
          <div className='input' style={{borderRadius:'5px',width:'400px',height:"68px", backgroundColor:"rgba(182,179,198,0.14)", display:"flex", justifyContent:"center", alignItems:'center'}}>
            <div style={{height:'20px', width:'336px', display:'flex', alignItems:'center'}}>
              <img src={search} alt='search' style={{width:'20px', height:'20px'}} />
              <p style={{fontSize: '14px', marginLeft:"10px", color:'#c3c3c3'}}>Search for a particular video</p>
            </div>
          </div>
        </section>
        <hr style={{marginTop:'56px', backgroundColor:"rgba(0, 0, 0, 0.1)", border:'none', height:"1px"}} />
        <section className='videos'>
          <p style={{fontWeight:'500', fontSize:"18px" , color:'#141414', marginLeft:"131px", marginTop: '56px'}}>Recent Files</p>
          {error && <center>{error}</center>}
          <div className='moviesgrid'>
          {videos.map((video) => (
               <VideoCard key={video._id} {...video} />
          ))}
          </div>

        </section>
    </div>
  )
}

export default Home