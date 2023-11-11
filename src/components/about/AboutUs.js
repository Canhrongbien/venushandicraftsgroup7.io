import React from 'react'
import './AboutUs.scss'
import image1 from '../../assets/images/AboutImages/venus-company.png'
import image3 from '../../assets/images/AboutImages/venus-style.jpg'
import image5 from '../../assets/images/AboutImages/banner_aboutus.jpg'

function AboutUs() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='about-us'>
        <div className="about-us-banner">
            <img className='about-us-banner-img' src={image5} alt="banner" />
            <div className="about-us-banner-cover">
                <h1>About Us</h1>
            </div>
           
        </div>
        
        <div className='about-us-content'>
       
        <div className='about-us-content-col1-7'>
            <h2 >HISTORY</h2>
                <p >Born from the idea of making a difference, Venus Handicrafts has maintained and developed to become a leading position in the Vietnamese furniture market. Up to now, Venus Handicrafts had many large-scale and professional stores in big cities such as Hanoi and Ho Chi Minh City. HCMC, Binh Duong.</p>
        </div>
        <div className='about-us-content-col1-5'>
            <img src={image1} alt="image1-about" />
        </div>
        <div className='about-us-content-col5-7'>
            <p ><strong >2023:</strong> Affirming a sustainable brand with new developments despite facing difficulties due to the Covid    epidemic. The store system expanded, with a new showroom in Ho Chi Minh.</p>
            <p ><strong>2019:</strong> This is a special year of the Venus Handicrafts brand – Marking 20 years of development. With the   appearance of 2 stores in Da Nang City and Binh Duong</p>
            <p ><strong>2014:</strong> Expanding Venus Handicrafts system with 2 large stores in the heart of Hanoi capital in Hoan Kiem   district and Dong Da district.</p>
            <p ><strong >2011 – 2014</strong>: Affirming the brand with the appearance of 2 new stores in Hanoi.</p>
            <p ><strong>2005 – 2010:</strong> Strongly developed with stores in new urban areas such as Venus Handicrafts Phu My Hung  and Venus Handicrfats Centre – the central area of District 1.</p>
            <p><strong>2002 – 2005:</strong> Venus Handicraft in Hanoi and Venus Handicrafts Citimart in Ho Chi Minh City HCM aims to    improve the system and better serve customers.</p>
            <p ><strong >2000:</strong> Born with 2 large stores in Hanoi and Ho Chi Minh City. HCM.</p>
                
        </div>
        <div className='about-us-content-col1-4' >
            <h3 >Values and differences</h3>
            <p >Venus Handicrafts can play a significant role in the economy, particularly in developing countries. They can provide employment and income to artisans and their families, and they can also generate foreign exchange earnings through exports. In addition, handicrafts can contribute to sustainable development by promoting the use of local resources and traditional skills</p>
            <p>Handicrafts are often closely linked to a particular culture or region. They can reflect traditional values, beliefs, and ways of life. Handicrafts can also be used to tell stories and preserve cultural heritage..</p>
            <p >Handicrafts can have a deep personal value to both makers and buyers. For makers, handicrafts can be a source of pride and satisfaction. For buyers, handicrafts can be a way to connect with a particular culture or region, to support artisans, or to simply own a unique and beautiful piece of art.</p>
            <div >
            <h3 >Quality and service</h3>
            <p >The quality of handicrafts can vary widely, depending on the skill of the artisan, the materials used, and the level of quality control. However, in general, handicrafts are known for their high quality and durability. This is because they are typically made with care and attention to detail, using traditional skills and techniques that have been passed down for generations..</p>
            <p >n addition to quality, handicrafts are also known for their excellent service. Artisans and retailers of handicrafts often take pride in providing their customers with a high level of personal service. This can include helping customers to choose the right piece, providing information about the product and its maker, and offering after-sales support..</p>
        </div>
        </div>
        <div className='about-us-content-col4-7'>
            <img src={image3} alt="image1-about" />
        </div>
    </div>
    </div>

  )
}

export default AboutUs
