import React from 'react'
import './StoresVenus.scss'
import image1 from '../../assets/images/Stores/storepage-banner1.png'
import image2 from '../../assets/images/Stores/store1.png'
import image3 from '../../assets/images/Stores/store2.png'
import image4 from '../../assets/images/Stores/store3.png'


function StoresVenus() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='storesVenus'>
        <div className="storesVenus-banner">
            <img className='storesVenus-banner-img' src={image1} alt="banner" />
            <div className="storesVenus-banner-cover">
                <h1>STORES OF VENUS HANDICRAFTS</h1>
            </div>
        </div>
        <div className='storesVenus-wrapper'>
            <div className='storesVenus-wrapper-content'>
                <div style={{maxWidth:'400px'}}>
                    <h3>Headquarters</h3>
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
                    </p>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.266190718364!2d106.67985067508383!3d10.790912958926285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4a7c59c09%3A0x8e2f7cbc924be1db!2zMzkxYSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1699504230696!5m2!1svi!2s" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className='storesVenus-wrapper-content-img'>
                    <img src={image2} className='storesVenus-wrapper-content-img' alt="store1" />
                </div>
            </div>
            <div className='storesVenus-wrapper-content'>
                <div style={{maxWidth:'400px'}}>
                    <h3>Showrom 1</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                        21 Tan My, Tan Phu Ward, Dist 7, HCM
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
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9621874231093!2d106.71578847508331!3d10.737397759912314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8690a6778f%3A0x19140d1e46b2ef05!2zMjEgVMOibiBN4bu5LCBUw6JuIFBow7osIFF14bqtbiA3LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699504144404!5m2!1svi!2s" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className='storesVenus-wrapper-content-img'>
                    <img src={image3} className='storesVenus-wrapper-content-img' alt="store1" />
                </div>
            </div>
            <div className='storesVenus-wrapper-content'>
                <div style={{maxWidth:'400px'}}>
                    <h3>Showrom 2</h3>
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
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5467099891493!2d79.67834448009536!3d13.745871363018454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d3ee282a3a3cb%3A0xe7b277f1ee00cf9f!2sSri%20Kalahasti!5e0!3m2!1svi!2s!4v1699504458945!5m2!1svi!2s" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className='storesVenus-wrapper-content-img'>
                    <img src={image4} className='storesVenus-wrapper-content-img' alt="store1" />
                </div>
            </div>
           
          
        </div>
    </div>
  )
}

export default StoresVenus
