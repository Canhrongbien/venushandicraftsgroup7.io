import React from 'react'
import './Gallery.scss'
import { Link } from 'react-router-dom'

function GalleryItems(props) {
  const item = props;
  return (
    <div className='productdetails'>
      <div className='productdetails-avatar'>
        <Link to={`/products/detail/${item.id}`}> 
        <img src={item.images} alt='items' className='productdetails-avatar-img' />
        </Link>
      </div>
      <div className='productdetails-content'>
        <h4 className='productdetails-content-h4' >{item.name}</h4>
        <div className='productdetails-content-rating'>
          { item.rating === null ? '': 'Rating: '} {item.rating}
          { item.rating === null ? '': ' star'}
        </div>
      </div>
    </div>
  )
}
export default GalleryItems
