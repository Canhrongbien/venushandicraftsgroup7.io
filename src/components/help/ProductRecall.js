import React from 'react'
import './HelpofStoreStyle.scss'
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';

function ProductRecall() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='faqstore'>
            <div className='faqstore-banner'>
                <div className='faqstore-banner-title'>
                    <h1>RECALL PRODUCTS </h1>
                    <h1>VENUS HANDICRAFTS </h1>
                    <p>The safety and quality of our products is of the utmost importance to us. When   product recalls for safety or quality issues are necessary, we aim to facilitate  seamless and swift resolutions by first emailing customers impacted by these recalls. 
                    </p>
                </div>
                <div className='faqstore-banner-img'>
                    <img src={imgbannerservices} alt="bannersevices" />
                </div>
            </div>
            <div className='faqstore-wrapper'>
                <div className='faqstore-wrapper-item'>
                    <h2>If you posses a recalled product listed below and have not yet been contacted by a  Venus Handicrafts representative, we ask that you please:</h2>
                    <ul>
                        <li>
                            Stop using the product immediately.
                        </li>
                        <li>
                            Place the product in an area where a child cannot access it.
                        </li>
                        <li>
                            Email Venus Handicrafts at recall_info@venushandicrafts.com
                        </li>
                    </ul>
                </div>
                <div className='faqstore-wrapper-item'>
                    <h2>If email, please include "Product Recall" in the subject line, and the following    information in the body of your message:</h2>
                    <ul>
                        <li>The warranty covers material and workmanship defects on all products from our   entire collection, ensuring that defects are corrected, or the product is replaced    within the warranty period.
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

export default ProductRecall
