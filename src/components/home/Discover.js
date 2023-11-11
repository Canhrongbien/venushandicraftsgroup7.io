import React from 'react'
import { Link } from 'react-router-dom'
import './Discover.scss'
import video1 from '../../assets/videos/0927.mp4'
import video2 from '../../assets/videos/0928.mp4'

function Discover() {
  return (
    <div className="discover">
      <h3 className='discover-title-h3'>EXPLORE SPECIAL EDITIONS</h3>
        <p  className='discover-title-p'>Discover the best of handicrafts and decorative and tableware. Let's decorate your life to make it more colorful
        </p>

        <div className='discover1' >
          <Link to ="/brands">
            <video autoPlay loop muted className="discover1-video">
              <source src={video1} type='video/mp4' />
          </video>
          </Link>
          <div className="discover1-content">
            <h4 className="discover1-content-title-h4">Table Wares Colection</h4>
            <p className="discover1-content-paragraph">A combination of classic and modern,   <br></br> exquisite patterns, we will bring you the most valuable table wares for your sleep<br></br> Easy to charge and easy to use<br></br> always accompany you in every sleep.<br></br>
            <Link to="brands/4">More...</Link>
            </p>
          </div>
        </div>

        <div className='discover2' >
          <div className="discover2-content">
            <h4 className="discover2-content-title-h4">Home Decoration Collection, Making Yourlife Beautiful</h4>
            <p className="discover2-content-paragraph">A gathering place for the most suitable handicrafts for your home. <br></br> Venus' home decor collection will bring you the most outstanding solutions<br></br> We put love into each product and focus on user experience.<br></br> contributes to making the living space   more cozy, <br></br>closer and more lively, creating cohesion for family members. <br />
            <Link to="brands">More...</Link>
            </p>
            
          </div>
          <Link to ="/brands">
          <video autoPlay loop muted className="discover2-video">
              <source src={video2} type='video/mp4' />
          </video>
          </Link>
        </div>



      </div>

  )
}

export default Discover
