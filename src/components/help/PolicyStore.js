import React from 'react'
import './HelpofStoreStyle.scss'
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';

function PolicyStore() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='faqstore'>
    <div className='faqstore-banner'>
        <div className='faqstore-banner-title'>
            <h1>PRIVACY AND DATA PROTECTION POLICY </h1>
            <h1>VENUS HANDICRAFTS </h1>
            <p>Creative collaborations merge points of view with shared values for unique designs   and experiences.We always want our services to fully meet the wishes of our customers</p>
        </div>
        <div className='faqstore-banner-img'>
            <img src={imgbannerservices} alt="bannersevices" />
        </div>
    </div>
    <div className='faqstore-wrapper'>
        <div className='faqstore-wrapper-item'>
            <h2>WHAT DOES THIS PRIVACY AND DATA PROTECTION POLICY APPLY TO?</h2>
            <ul>
                <li>
                    This privacy and data protection policy applies to all personal data that we collect, use, and process in connection with our website, products, and services. Personal data is any information that can be used to identify an individual, such as name, email address, mailing address, and phone number.
                </li>
                <li>
                    This policy also applies to personal data that we collect from third-party sources, such as social media platforms and data brokers.
                </li>
                <li>
                    We do not collect or process any special categories of personal data, such as data on racial or ethnic origin, political opinions, religious beliefs, or sexual orientation.
                </li>
               
            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>WHAT DATA IS COLLECTED?</h2>
            <p>With your prior consent, we may collect and process all or some of the following data when you use our Mediums:</p>
            <ul>
                <li>
                    first and last name
                </li>
                <li>
                    email address
                </li>
                <li>
                    postal address
                </li>
                <li>
                    your opinion of our products
                </li>
                <li>
                    any special request that you may send to us
                </li>


            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>DO WE COLLECT YOUR IP ADDRESS AND COOKIES</h2>
            <ul>
                <li>
                Yes, we may collect your IP address and browser type for system administration and/or statistical purposes without identifying any other individual information.
                </li>
                <li>
                In some cases, we may also use cookies, which are small files of letters and numbers downloaded to your device when you access our mediums.
                </li>
                <li>
                These cookies never contain information that may personally identify a user.
                </li>
                <li>
                    These cookies may be read and used by Venus Handicrafts to determine how users navigate the site, to establish site use statistics, or for commercial prospecting.
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default PolicyStore
