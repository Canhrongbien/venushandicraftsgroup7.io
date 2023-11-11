import './FooterMain.scss'
import React from 'react'
import logo from '../../assets/images/Logo-Venus-main.png'
import facebook from '../../stories/icons/facebook.png'
import twitter from '../../stories/icons/twitter.png'
import instagram from '../../stories/icons/instagram.png'
import messenger from '../../stories/icons/messenger-1.png'

import { Link } from 'react-router-dom'
function FooterMain() {
  const footercontent = {
    About : [
      {id : '1', info : 'About Us', path :'/about-us'},
      {id : '2', info : 'Stores', path:'/stores'},
      {id : '3', info : 'Ecosystem Of Venus', path:'/ecosystem'},
      {id : '4', info : 'Careers', path:'/careers'},
    ],
    Services : [
      {id : '1', info : 'Delivery Service', path :"/DeliveryServices"},
      {id : '2', info : 'Technology Support', path :"/TechnologySupport"},
      
    ],
    Help :[
      {id : '1', info :'Warranties', path : 'warranties'},
      {id : '2', info :'Feedback', path : 'contact'},
      {id : '3', info :'Policy', path : 'policy'},
      {id : '4', info :'Product Recalls', path : 'product-recalls'},
    ],
    Social : [
      {id : '1', info :'Facebook', path :'https://www.facebook.com/', icon : facebook },
      {id : '2', info :'Twitter' , path :'https://twitter.com/', icon : twitter},
      {id : '3', info :'Instagram', path: 'https://www.instagram.com/', icon: instagram},
      {id : '4', info :'Messenger', path: 'https://www.messenger.com//', icon: messenger}
    ]
  }
  return (
    <div className='footer'>
      <div className="footer-title">
        <img src={logo} alt="logo" className='footer-title-logo' />
      </div>
      <div className="footer-content">
        <div className="footer-content-left">
          <ul className="footer-content-left">
          <h4>ABOUT</h4>
          {footercontent.About.map((items,index) => {
            return (
              <li className="footer-content-left" key={index}>
                <Link to={items.path} className="footer-content-left-url">{items.info}</Link>
              </li>
            )
          })}
          </ul>
        </div>
        <div className="footer-content-center">
        <ul className="footer-content-center">
          <h4>SERVICES</h4>
          {footercontent.Services.map((items,index) => {
            return (
              <li className="footer-content-center" key={index}>
                <Link to={items.path} className="footer-content-center-url">{items.info}</Link>
              </li>
            )
          })}
          </ul>
        </div>
        <div className="footer-content-right">
          <ul className="footer-content-right">
            <h4>HELP</h4>
            {footercontent.Help.map((items,index) => {
              return (
                <li className="footer-content-right" key={index}>
                  <Link to={items.path} className="footer-content-right-url">{items.info}</Link>
                </li>
              )
            })}
          </ul>
              
        </div>
        <div className="footer-content-contact">
            <p>
                <i className="fa-solid fa-location-dot"></i>
                <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                391A Nam Ki Khoi Nghia St, Ward 7, District 3, Ho Chi Minh City
            </p>
            <p>
                <i className="fa-solid fa-phone"></i>
                <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                037 4640 477
            </p>
            <p>
                <i className="fa-solid fa-at"></i>
                <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                venushandicrafts@email.com.vn
                <div className='contact-wrapper-content-map'>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61553144678476%26locale%3Dvi_VN&tabs=timeline&width=280&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="290" height="160" style={{border:0}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </p>
        </div>
      </div>
      <div className="footer-social">
        <ul className="footer-social">
          <h4 className="footer-social-title">Contact With US</h4>
          {footercontent.Social.map((items,index) => {
            return (
              <li className="footer-social-contact" key={index}>
                <Link to={items.path} className="footer-social-contact-url">
                <img src={items.icon} alt={items.info} className="footer-social-contact-img" />
                {items.info}
                </Link>
              </li>
            )
          })}
          </ul>
      </div>
      <div className="footer-copyright">
        <p className='footer-copyright'>&copy; Copyright by Group 7 T3.2307 E1 Aptech, Ngoc Han </p>
      </div>
    </div>
  )
}

export default FooterMain
