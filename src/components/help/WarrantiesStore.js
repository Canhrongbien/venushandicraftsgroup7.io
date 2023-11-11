import React from 'react'
import './HelpofStoreStyle.scss'
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';

function WarrantiesStore() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='faqstore'>
        <div className='faqstore-banner'>
            <div className='faqstore-banner-title'>
                <h1>WARRANTIES </h1>
                <h1>VENUS HANDICRAFTS </h1>
                <p>Creative collaborations merge points of view with shared values for unique designs   and experiences.We always want our services to fully meet the wishes of our customers</p>
            </div>
            <div className='faqstore-banner-img'>
                <img src={imgbannerservices} alt="bannersevices" />
            </div>
        </div>
        <div className='faqstore-wrapper'>
            <div className='faqstore-wrapper-item'>
                <h2>MAINTENANCE PROCESS</h2>
                <ul>
                    <li>
                        Handicrafts used for decoration and lacquer paintings customers bring to the warranty at Dong Phuong company's showroom. Venus is responsible for inspecting the product to determine warranty conditions according to company regulations.
                    </li>
                    <li>
                        For products under warranty conditions, Venus will decide whether to repair or replace the product
                        For products that are not within the scope of warranty that the customer needs, Vennus will charge a fee and only do so when the customer agrees. Venus will check the product and notify customers of the return time
                    </li>
                </ul>
            </div>
            <div className='faqstore-wrapper-item'>
                <h2>WARRANTY CONDITIONS</h2>
                <ul>
                    <li>
                        Warranty under the condition that products in the catalog are   warranted
                        The product is still within the warranty period
                        The warranty card must have complete information and the company's seal
                    </li>


                </ul>
            </div>
            <div className='faqstore-wrapper-item'>
                <h2>WHAT IS NOT COVERED BY THE WARRANTY?</h2>
                <ul>
                    <li>
                    The product does not have a warranty card with full information and company seal.
                    </li>
                    <li>
                    No valid purchase receipt
                    </li>
                    <li>
                    The product has expired warranty period
                    </li>
                    <li>
                    The product is damaged by the customer during use
                    Force majeure failures due to natural disasters, fires, etc.
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default WarrantiesStore
