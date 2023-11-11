import React from 'react'
import './ContactUs.scss'

import image4 from '../../assets/images/ContactUs/contact.jpg'
function ContactUs() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you, your request has been received! We will contact you as soon as possible.');
        // Thực hiện các xử lý khác tại đây (nếu cần)
    };
  return (
    <div className='contact'>
        <div className="contact-banner">
            <img className='contact-banner-img' src={image4} alt="banner" />
            <div className="contact-banner-cover">
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className='contact-wrapper'>
            <br />
            <p>For all enquiries please use the below form to contact your closest store who will get in contact shortly. Your closest store is your service point and can assist you on claims, product information, availability, delivery, prices, and more. If you are enquiring about an order, please choose the store where you made the purchase. If you are unsure which store that is, or if that store has closed, then please choose your closest store.</p>
            <div className='contact-wrapper-info'>
                <form action="/" className='contact-wrapper-info' onSubmit={handleSubmit}>
                <input type="text" className='text-input' required placeholder='FIRST NAME:' /><br/>
                <input type="text" className='text-input' required placeholder='LAST NAME:' /><br/>
                <input type="number" className='text-input' required placeholder='PHONE:' /><br/>
                <textarea id="contact" name="contact" rows="2" cols="50" required className='text-area' placeholder='Message' />
                <input type="text" className='text-input' required placeholder='YOUR EMAIL:' /><br/>
                <input type="submit" value='Send' className='submit-button' />
                </form>
            </div>
            <div className='contact-wrapper-content'>
                <div className='contact-wrapper-content-address'>
                    <h3>Headquarters</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                        391A Nam Ki Khoi Nghia Street, Dist3, HCM
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
                    </p>
                   
                </div>
                <div className='contact-wrapper-content-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2661910757956!2d106.67755467979958!3d10.790912931510737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a7c59c09%3A0x8e2f7cbc924be1db!2zMzkxYSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1699510884775!5m2!1svi!2s" width="500" height="203.5" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='contact-wrapper-content'>
                <div  style={{maxWidth:'400px'}}>
                    <h3>Visit a Showroom</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                        21 Tan My Street, Tan Phu Ward, Dist 7, HCM
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
                    </p>
                   
                </div>
                <div className='contact-wrapper-content-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.9864117840006!2d106.7156589!3d10.7386726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8690a6778f%3A0x19140d1e46b2ef05!2zMjEgVMOibiBN4bu5LCBUw6JuIFBow7osIFF14bqtbiA3LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDA!5e0!3m2!1svi!2s!4v1699505651606!5m2!1svi!2s" width="500" height="203.5" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='contact-wrapper-content'>
                <div  style={{maxWidth:'400px'}}>
                    <h3>Showroom in India</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                        Sri Kalahasti, Srikalahasti, Andhra Pradesh, India
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
                    </p> 
                </div>
                <div className='contact-wrapper-content-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31003.932958939742!2d79.68268516391453!3d13.749200381264533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d3e543dbbc769%3A0xc759d83ecf891652!2zU3Jpa2FsYWhhc3RpLCBBbmRocmEgUHJhZGVzaCwg4bqkbiDEkOG7mQ!5e0!3m2!1svi!2s!4v1699505814618!5m2!1svi!2s" width="500" height="203.5" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
          
        </div>
    </div>
  )
}

export default ContactUs
