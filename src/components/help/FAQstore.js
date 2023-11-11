import React from 'react'
import './HelpofStoreStyle.scss'
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';

function FAQstore() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='faqstore'>
    <div className='faqstore-banner'>
        <div className='faqstore-banner-title'>
            <h1>FAQs </h1>
            <h1>VENUS HANDICRAFTS </h1>
            <p>Creative collaborations merge points of view with shared values for unique designs and experiences.We always want our services to fully meet the wishes of our customers</p>
        </div>
        <div className='faqstore-banner-img'>
            <img src={imgbannerservices} alt="bannersevices" />
        </div>
    </div>
    <div className='faqstore-wrapper'>
        <div className='faqstore-wrapper-item'>
            <h2>How to check stock availability</h2>
            <ul>
                <li>Always check your desired product's availability here on our website or in the Venus Handicrafts before you visit your local Venus Handicrafts store. We update stock status for our products every few hours.&nbsp;</li>
                <li>The best way to get the latest stock status is to visit the product page or listing pages of the item you are interested in and check its availability at your local Venus Handicrafts store. When checking on our listing page, an indicator for your local store will display as well as possibility for delivery.&nbsp;&nbsp;&nbsp;</li>
                <li>If the product you are looking for is out of stock at your local store, you can click on the 'check other Venus Handicrafts stores' link to view inventory from our other locations.</li>
                <li>You can also select 'notify me' and you will receive a communication from Venus Handicrafts when your product is back in stock. Note that stock shipments are limited and tend to be purchased quickly, so we encourage you to use our click and collect service to secure the products you want or visit your local store first thing in the morning. &nbsp;</li>
                <li>Products that show the status 'Few in stock' may not be available for purchase online because their limited stock level means we can't guarantee that they will still be available at time of purchase.</li>
                <li>Please note - the stock status you see online or in the Venus Handicrafts app is the same information that our customer service co-workers have access to. If you need further support, please see the FAQ below or connect with us via Chat.</li>
                <li>Before you visit be sure to download our shopping app - it is a great way to check out what Venus Handicrafts has to offer and also to even check for stock while you are shopping in store!</li>
                </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>Order</h2>
            <ul>
                <li>How can I check the status of my order?<br></br>
                    Using your order number and email address or phone number, you can track your order online
                </li>
                
              
            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>Order Changes</h2>
            <ul>
                <li>
                We're unable to change the service on an order once payment has been collected. If you prefer to place a Click & Collect order or purchase in-store, it would be necessary to cancel your order for delivery.
                </li>
                
              
            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>What materials are your handicrafts made of?</h2>
            <ul>
                <li>
                Our handicrafts are made of a variety of materials, including wood, stone, ceramics, metal, glass, aluminium, brass etc. We use high-quality materials that are carefully selected from reputable suppliers.
                </li>
            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>How do I order your handicrafts?</h2>
            <ul>
                <li>
                To order our handicrafts, you can visit our website or contact our customer support team by phone or email. We will provide you with detailed instructions on how to order.
                </li>
            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>How can I find out more information about a specific handicraft?</h2>
            <ul>
                <li>
                You can visit our website to learn more about our handicrafts. You can also contact our customer support team for direct advice.
                </li>
            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>How can I pay for my order?</h2>
            <ul>
                <li>
                We accept payment by cash, bank transfer, and credit card. You can choose the payment method that best suits you.
                </li>
            </ul>
        </div>
    </div>
    
</div>
  )
}

export default FAQstore
