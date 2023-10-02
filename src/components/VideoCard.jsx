import React from 'react'
import pic from '../images/video frame.png'
import share from '../images/link.png'
import option from '../images/more.png'
import { Link } from 'react-router-dom'

function VideoCard(props) {
  return (
    <Link className="linkCard" style={{ textDecoration: 'none', color: 'inherit' }} to={`videos/${props._id}`}>
    <div className='card' style={{width:'557px', height:"322px", border:'1px solid #b6b3c6', borderRadius:"10px"}}>
        <img src={pic} alt="logo" style={{margin:'16px',width:'525px', height:"208px" }}/>
        <div style={{height:'50px', width:"525px", marginTop:'1px', display:"flex", paddingLeft:'16px'}}>
            <div style={{width:"453px" , display: 'flex', flexDirection:'column', justifyContent: 'space-between'}} >
                <p style={{fontWeight:'500', fontSize:"20px", color:"#141414" }}>How To Create Facebook Ad Listing</p>
                <p style={{fontWeight:"400", fontSize:'16px', color:'#b6b3c6'}}>SEPTEMBER 23, 2023</p>
            </div>
            <div style={{display: "flex", flexDirection:'column',width:'72px'}}>
            <div style={{display:"flex", height: '24px', justifyContent:"space-between", alignItems:'center'}}>
                    <img src={share} alt="share" style={{width:"24px", height:'24px'}}/>
                    <img src={option} alt="options" style={{width: '24px', height:'24px'}}/>
                </div>
                <div></div>
            </div>
            
        </div>

    </div>
    </Link>
  )
}

export default VideoCard